# Socket.io with Elephant.io

# Elephant.io
[![Build Status](https://travis-ci.org/Wisembly/elephant.io.svg?branch=master)](https://travis-ci.org/Wisembly/elephant.io)
[![Latest Stable Version](https://poser.pugx.org/wisembly/elephant.io/v/stable.svg)](https://packagist.org/packages/wisembly/elephant.io)
[![Total Downloads](https://poser.pugx.org/wisembly/elephant.io/downloads.svg)](https://packagist.org/packages/wisembly/elephant.io) 
[![License](https://poser.pugx.org/wisembly/elephant.io/license.svg)](https://packagist.org/packages/wisembly/elephant.io)

Elephant.io is a rough websocket client written in PHP. Its goal is to ease the communications between your PHP Application and a real-time server.

* Install
1. Download the most recent release from [release page](https://github.com/Wisembly/elephant.io/releases) or `git clone git://github.com/Wisembly/elephant.io.git`
2. Install composer in your project: `curl -s http://getcomposer.org/installer | php`
3. Create a composer.json file (or update it) in your project root:
    ```javascript

      {
        "require": {
          "wisembly/elephant.io": "~3.0"
        }
      }
    ```
4. Install via composer : `php composer.phar install`

# Socket.io
[![Build Status](https://secure.travis-ci.org/socketio/socket.io.svg?branch=master)](https://travis-ci.org/socketio/socket.io)
[![Dependency Status](https://david-dm.org/socketio/socket.io.svg)](https://david-dm.org/socketio/socket.io)
[![devDependency Status](https://david-dm.org/socketio/socket.io/dev-status.svg)](https://david-dm.org/socketio/socket.io#info=devDependencies)
[![NPM version](https://badge.fury.io/js/socket.io.svg)](https://www.npmjs.com/package/socket.io)
![Downloads](https://img.shields.io/npm/dm/socket.io.svg?style=flat)
[![](http://slack.socket.io/badge.svg?)](http://slack.socket.io)

Socket.IO enables real-time bidirectional event-based communication. It consists in:

- a Node.js server (this repository)
- a [Javascript client library](https://github.com/socketio/socket.io-client) for the browser (or a Node.js client)

* Install
1. Install NodeJS
2. Install Socket.io
```bash
npm install socket.io --save
```
