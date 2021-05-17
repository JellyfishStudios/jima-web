#!/bin/bash
cd /var/jimaweb
NODE_ENV=production forever start dist/server.js