# Node.js + Express.js + TypeScript client using @Debug decorator

## Introduction

This demo project shows how you can put @Deubg() decorator on methods to skip them being executed at production mode. If you set `NODE_ENV=production` in `process.env.NODE_ENV` variable then all methods with @Debug() decorator will not get executed at runtime.