# thisiscrap

## Starting the server

```bash
git clone https://github.com/bobby-brennan/thisiscrap.git && cd thisiscrap
npm install
bower install
cd node_modules/strapping && bower install && cd ../..
export DEVELOPMENT=true
node server.js
```

## PhoneGap
The PhoneGap app is stored at:
https://github.com/bobby-brennan/thisiscrap-app.git

You can build the PhoneGap in the directory `../thisiscrap-app` by running
```
node scripts/build-phonegap.js
```




## Strapping!
You can edit the Bootstrap configuration for ThisIsCrap by visiting localhost:3000/strapping/editor

See [documentation](https://github.com/bobby-brennan/thisiscrap)
