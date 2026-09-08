# FieldHQ Web (cwt-web) — Docker Deployment

Angular SPA served by Nginx inside Docker. Host Nginx terminates TLS and proxies to the container.

| Item | Value |
|------|--------|
| Repo path on VPS | `/opt/fieldhq-web` |
| Container | `fieldhq-web` |
| Internal port | `80` |
| Host bind | `127.0.0.1:8080` |
| Public domain | `https://app.fieldhqapp.com` |
| API | `https://api.fieldhqapp.com` (set in `environment.prod.ts`) |

---

## Architecture

```
Browser → Nginx (TLS, app.fieldhqapp.com)
              ↓
         127.0.0.1:8080  →  fieldhq-web container (nginx:alpine)
```

---

## 1. First-time VPS setup

```bash
ssh admin@YOUR_VPS_IP

sudo mkdir -p /opt/fieldhq-web
sudo chown admin:admin /opt/fieldhq-web

git clone https://github.com/000Ahsan/cwt-web.git /opt/fieldhq-web
cd /opt/fieldhq-web
git checkout master
```

### Build and start

```bash
cd /opt/fieldhq-web
docker compose build web
docker compose up -d web
docker compose ps
curl -sS -o /dev/null -w "%{http_code}\n" http://127.0.0.1:8080/
# Expect 200
```

---

## 2. Host Nginx (TLS reverse proxy)

```bash
sudo nano /etc/nginx/sites-available/app.fieldhqapp.com
```

```nginx
server {
    listen 80;
    server_name app.fieldhqapp.com;

    location / {
        proxy_pass http://127.0.0.1:8080;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

```bash
sudo ln -sf /etc/nginx/sites-available/app.fieldhqapp.com /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

sudo certbot --nginx -d app.fieldhqapp.com
```

DNS: `A` record for `app` → VPS IP.

---

## 3. GitHub Actions secrets

In the **cwt-web** GitHub repo → Settings → Secrets → Actions  
(same values as the backend repo are fine):

| Secret | Value |
|--------|--------|
| `SERVER_HOST` | VPS IP / hostname |
| `SERVER_USER` | `admin` |
| `SERVER_SSH_KEY` | deploy private key |
| `SERVER_PORT` | `22` (optional) |

Push to `master` triggers auto-deploy.

---

## 4. Backend CORS

Ensure `/opt/fieldhq/.env` has:

```env
ALLOWED_ORIGINS=https://app.fieldhqapp.com
```

Then recreate API if needed:

```bash
cd /opt/fieldhq
docker compose up -d --force-recreate --no-deps api
```

---

## 5. Useful commands

```bash
cd /opt/fieldhq-web
docker compose logs -f web
docker compose restart web
docker compose ps
```

---

## 6. Changing the API URL

Edit `public/environments/environment.prod.ts`, commit, push to `master`.  
CI rebuilds the image with the new URL baked in at build time.
