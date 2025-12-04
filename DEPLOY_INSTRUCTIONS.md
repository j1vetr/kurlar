# Ubuntu Sunucusu İçin Dağıtım Kılavuzu

Bu kılavuz, `kurlar.toov.com.tr` adresine React uygulamanızı dağıtmak için gerekli adımları içerir.

## 1. Sunucu Hazırlığı

Öncelikle sunucunuzu güncelleyin ve gerekli paketleri kurun:

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install nginx git nodejs npm -y
```

Node.js sürümünü kontrol edin (v18+ önerilir):
```bash
node -v
```
Eğer sürüm eskiyse, nvm veya nodesource kullanarak güncelleyebilirsiniz.

## 2. Projeyi Klonlama

Projeyi `/var/www` dizinine klonlayın:

```bash
cd /var/www
sudo git clone https://github.com/j1vetr/kurlar.git
sudo chown -R $USER:$USER /var/www/kurlar
```

## 3. Kurulum ve Derleme (Build)

Proje dizinine girin ve bağımlılıkları yükleyip projeyi derleyin:

```bash
cd /var/www/kurlar
npm install
npm run build
```

Bu işlem sonucunda `dist` klasörü oluşacaktır. Bu klasör, yayınlanacak statik dosyaları içerir.

## 4. Nginx Konfigürasyonu

Projedeki `.conf` dosyasını Nginx klasörüne kopyalayın:

```bash
sudo cp kurlar.toov.com.tr.conf /etc/nginx/sites-available/kurlar.toov.com.tr
```

Siteyi aktif edin:

```bash
sudo ln -s /etc/nginx/sites-available/kurlar.toov.com.tr /etc/nginx/sites-enabled/
sudo nginx -t
```
Eğer "syntax is ok" mesajını alırsanız, Nginx'i yeniden başlatın:

```bash
sudo systemctl restart nginx
```

## 5. SSL Sertifikası (HTTPS) - Önerilen

Certbot kullanarak ücretsiz SSL sertifikası alın:

```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d kurlar.toov.com.tr -d www.kurlar.toov.com.tr
```

Tebrikler! Siteniz artık yayında.
