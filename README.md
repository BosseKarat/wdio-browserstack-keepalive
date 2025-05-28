# wdio-browserstack-keepalive

To run test: npm run wdio

To verify results: Go to the Browserstack Automate dashboard, check the "issues" tab in one of the tests on your latest run. The "HTTP keep-alive missing" error should be visible.

node version: 20.8.0
npm version: 10.1.0

# Steps to reproduce the issue

This is the version where the problem is introduced: 

    "@wdio/browserstack-service": "^9.12.5",
    "@wdio/cli": "^9.12.5",
    "@wdio/local-runner": "^9.12.5",
    "@wdio/mocha-framework": "^9.12.5",
    "@wdio/spec-reporter": "^9.12.5",
    "undici": "^7.10.0"

If installed, they will throw the "HTTP keep-alive missing" error which will be visible in the Browserstack dashboard under "Issues" tab.

If these versions are installed instead:

    "@wdio/browserstack-service": "^9.12.4",
    "@wdio/cli": "^9.12.4",
    "@wdio/local-runner": "^9.12.4",
    "@wdio/mocha-framework": "^9.12.4",
    "@wdio/spec-reporter": "^9.12.4",
    "undici": "^7.10.0"

... the keep-alive error will disappear. This package: @wdio/local-runner appears to be the culprit though. If you keep the rest of @wdio packages at v.9.12.5 and only downgrade @wdio/local-runner to v.9.12.4, the error will go away.

At first, I thought this was a undici -> Browserstack related problem when using a proxy. This doesn't seem to be case since I was still able to reproduce the issue without using any proxy setting (wdio.conf.ts -> line:4).

According to my hypothesis, the issue was presented in this relese: https://github.com/webdriverio/webdriverio/releases/tag/v9.12.5
... and is mot likely a consequence if this PR: https://github.com/webdriverio/webdriverio/pull/14391 
