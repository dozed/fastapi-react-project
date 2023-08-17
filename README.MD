



# Frontend

## Run development server

```sh
npm start
```


## Run tests

```shell
npm run test
```


## Build frontend

```sh
npm run build
```


## Installation of Node.js modules

```sh
npm install
```

# Backend

## Start development server

```sh
conda activate fastapi-react-project
python main.py
```


## Run mypy

```shell
mypy **/*.py
```


## Installation of Conda environment

```sh
conda env create -f env.yml
```

## Update of Conda environment

```sh
conda env update -f env.yml
```


# IntelliJ configuration

Mark `backend` directory as source:
- Right-click `backend directory`
- `Mark directory as` -> `Sources Root`

Configure ESLint:
- Go To: Settings -> Languages & Frameworks -> JavaScript -> Code Quality Tools -> ESLint
- Activate: "Manual ESLint configuration"
- Select ESLint package: Detect package and configuration file from the nearest package.json
- Run for files: `{**/*,*}.{js,ts,jsx,tsx,html,vue}`
- Activate: "Run eslint --fix on save"
