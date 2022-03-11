# AWS Amplify in codesandbox beta

## setup vite

```bash
npx create-vite@latest .
# create react-ts vite project
```


## Setup amplify

```bash
curl -sL https://aws-amplify.github.io/amplify-cli/install | bash && $SHELL
# it updates the HOME PATH to know .amplify/bin
bash
# it changed to the following and it know every thing it should know :)
# its shell is not zsh, but I'm going to use another terminal for other sides
<your-user-name>@pitcher-oke06x:/project/aws-amplify-csb$ 
amplify pull --sandboxId <your-sandbox-id>
```

## localhost mapping

You can configure probably Vite to instead of localhost use some env vars like `CODESANDBOX_HOST=oke06x-$PORT.preview.csb.app`
> Note: `oke06x` has is going to be differnet for your test

