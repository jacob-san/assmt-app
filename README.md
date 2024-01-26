# AssmtApp

Monorepo with two apps - web(React) & mobile(React Native) with shared libs/modules with maximum re-usabilty within and across the apps in the project.

## Project graph

![project graph](demo/project-graph.png)

### Structure

```
assmt-app
- apps
  - mobile
    - env
        - in
        - ae
    - src
    - features
      - signup
      - dashboard
  - web
    - features
      - signin
      - dashboard
- libs
  - common // Common logics and business rules to be used across the apps
  - auth
  - components
    - mobile
    - web
  - localization
  - network
  - theme 
  - types
```

## Pre-requisites

node > 18
yarn

## Getting started

Clone the project

```
git clone https://github.com/jacob-san/assmt-app.git
cd assmt-app
```

Install dependencies

```
yarn
```

### Start the app

To start the mobile app

```
yarn nx run run-ios
```

To start the app with AE country config and uat config

```
yarn ios:ae:uat
```

To start the web app

```
yarn nx run web:serve
```

## Demo

Demo - language selected is English & country is UAE

<img src="demo/ae_en.gif" width="250" />


Demo - language selected is French & country is India

<img src="demo/in_fr.gif" width="250" />