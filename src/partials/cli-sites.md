You can create sites using the CLI without needing to access the Console.

{% partial file="cli-disclaimer.md" /%}

To deploy your site with the indobase CLI, use the `indobase init sites` command to create a starter site and paste your code into the generated file and folder.

```sh
indobase init sites
```

To deploy the generated code, add any dependencies and push the site using the following command:

```sh
indobase push sites
```

{% arrow_link href="/docs/tooling/command-line/sites#commands" %}
Learn more about the CLI sites commands
{% /arrow_link %}
