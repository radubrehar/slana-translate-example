# translana

A translate CLI built to demo how [Slana](https://github.com/idancali/slana) can be used to quickly build nice CLI programs in node.js.

Powered by Google Translate API.

## Usage

```sh
$ npm i -g translana
```

Now you have google translate at your fingertips.

```sh
$ translana translate --text="How are you" --to=fr
```

You should see the following output:

```sh
Doing automatic input source language detection.

Translating:
How are you

Detected language: en

Translation:
Comment allez-vous
```

If you prefer to specify the input language as well, use `--from=en`.


```sh
$ translana translate --text="How are you" --to=fr --from=en
```

## License

#### MIT