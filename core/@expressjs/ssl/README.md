# run shell script to create ssl cert & key using openssl

```sh
# syntax
bash ./src/ssl/ssl.sh <%YOUR_DOMAIN_NAME%>

# example
bash ./src/ssl/ssl.sh local.mohaa.com
```
---

## after key generated

- simply copy the `rootCA.crt` & `rootCA.key` to your private folder

Note: ssl.sh bash scripts has only dummy info - if you wanted to have proper, that required to be updated

---

## run the app

```sh
yarn https-server
```

- run `https://localhost`
- start with unsafe mode to run
- click on the `Not Secure` link on the top of the URL header to see the generated details to ensure

---