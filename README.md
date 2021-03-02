# Run Local
* `npm i`
* `touch .env`
* Update `.env` with API token value: `REACT_APP_IG_TOKEN = '<token>'`
* `npm start`

# Deploy (from gcp console)
* `npm i`
* `touch .env`
* Update `.env` with API token value: `REACT_APP_IG_TOKEN = '<token>'`
* `npm run build`
* `gcloud app deploy`
