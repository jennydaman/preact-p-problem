# Preact `<p>` Problem

Preact cannot render a JavaScript list of `<div>`
as children of `<p>`.

The attributes of `<p>`'s children will be attached to sibling of `<p>` found later down.

# Steps to reproduce

1. `preact create --yarn --git simple preact-p-problem`
2. `yarn upgrade preact@latest preact-render-to-string@latest`
3. Add code: `<p>{[<div ...></div>]}</p>`
4. `yarn run serve`
