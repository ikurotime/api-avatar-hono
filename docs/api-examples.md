
# Character endpoint

`/api/character?params`

* https://ikurotime-api-avatar-hono.deno.dev/api/character

### Params 

* `hair` type of hair `number`
* `bg` background color - `number`
* `skin` type of skin `number`
* `clothes` type of clothes `number` 

::: warning
only 1 clothe avalaible
:::

### Example with html

```html
<img 
 	src="https://ikurotime-api-avatar-hono.deno.dev/api/character?hair=2&bg=3&clothes_color=1&skin=1&clothes=1" 
	width="400"
>
```

Expected result

![avatar](/avatar_example.png)