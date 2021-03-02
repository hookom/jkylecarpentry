# Run Local
* `export REACT_APP_IG_TOKEN='target_instagram_account_api_token'`
* `npm i`
* `npm start`

# Deploy (from gcp console)
* `npm i`
* `npm run build`
* Update API token value in `env_variables.yaml`
* `gcloud app deploy`
