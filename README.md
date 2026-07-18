# Mobile-First PHP Development with BrowserSync

This project is set up to allow:

- VS Code on desktop
- Real mobile phones on Wi-Fi
- Live reload (HTML, CSS, JS, PHP)

So you can develop against **real mobile browsers**, not Chrome emulation.

---

## How it works

We run:

- PHP’s built-in server (exposed to the network)
- BrowserSync as a proxy with live reload

Phones connect to BrowserSync, which injects live-reload scripts.

---

## 1. Find your local IP

On your computer:

### Mac / Linux
```
ifconfig
```

### Windows
```
ipconfig
```

Look for something like:
```
192.168.1.42
```

You will use this IP in the commands below.

---

## 2. Start the PHP server

From the project folder:

```
php -S 0.0.0.0:8000
```

This exposes PHP to your Wi-Fi network.

---

## 3. Start BrowserSync

In another terminal window, run:

```
browser-sync start --proxy "http://192.168.1.42:8000" --host 0.0.0.0 --files "**/*"
```

(Replace `192.168.1.42` with your actual IP.)

BrowserSync will print something like:

```
Local:    http://localhost:3000
External: http://192.168.1.42:3000
UI:       http://192.168.1.42:3001
```

---

## 4. Open on your phone

Make sure your phone is on the same Wi-Fi.

Open in the phone browser:

```
http://192.168.1.42:3000
```

Do NOT use port 8000 — that bypasses BrowserSync.

---

## 5. Live reload

Now:

- Edit HTML → phone reloads
- Edit CSS → phone updates instantly
- Edit PHP → phone reloads
- Scroll desktop → phone scrolls
- Click desktop → phone clicks

You are now developing on **real mobile browsers**.

---

## 6. Debug panel

You can see connected devices here:

```
http://192.168.1.42:3001
```

This shows phones, tablets, and browsers connected.

---

## Notes

- `localhost` will NOT work for phones.
- `0.0.0.0` is only for servers, not browsers.
- Always use the BrowserSync External URL on mobile.
