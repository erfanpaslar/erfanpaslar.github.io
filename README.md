# My personal website

This is my personal website that runs on https://erfanpaslar.ir

## Local Development

### Without Docker

Simply open `index.html` in your browser.

### With Docker

```bash
docker compose up -d
```

Website available at http://localhost:8080

## Production Deployment

### Requirements

- Docker and Docker Compose installed
- Reverse proxy (Caddy, Nginx, or Cloudflare) pointing to this container

### Steps

1. Clone the repository

```bash
git clone https://github.com/erfanpaslar/erfanpaslar.github.io.git
cd erfanpaslar.github.io
```

2. Build and run

```bash
docker compose up -d --build
```

3. Reverse proxy configuration

**Caddy**

```text
example.com {
    reverse_proxy localhost:8080
}
```

**Nginx**

```text
server {
    listen 80;
    server_name example.com;
    location / {
        proxy_pass http://localhost:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

### HTTPS with Caddy

Caddy auto-provisions HTTPS certificates. Just point your DNS A record to the server IP and Caddy handles the rest.

### HTTPS with Cloudflare

1. Add DNS A record pointing to your server IP
2. Set SSL mode to **Full (strict)** in Cloudflare dashboard
3. Enable proxy (orange cloud)

## File Structure

```text
.
├── index.html          # Main page
├── css/                # Stylesheets
├── js/                 # JavaScript files
├── images/             # Static assets
├── Dockerfile          # Container definition
├── docker-compose.yml  # Docker Compose configuration
└── README.md           # This file
```

## Updating the Website

Edit files locally, then push to the master branch. If using Docker with a bind mount, changes appear immediately. If using a built image, rebuild:

```bash
docker compose up -d --build
```
