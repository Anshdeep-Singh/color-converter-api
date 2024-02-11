import {Hono } from 'hono';
import {keyword} from 'color-convert'
import { KEYWORD } from 'color-convert/conversions';

const app = new Hono();

app.get("/",(ctx)=>{
	return ctx.text(
		`This is a Color Convert API, You can use the following color formats:
1. rgb
2. hsl
3. hsv
4. cmyk
5. hex

To use the API, use the following URL format:
https://colorconvert.anshdeepsingh.com/colorformat/colorname`
	);
})

app.get("/:colorformat/:colorname",(ctx)=>{
	const colorName: KEYWORD = ctx.req.param("colorname") as KEYWORD;
	const colorformat: string = ctx.req.param("colorformat") as string;

	if(colorformat === "rgb"){
		const rgb = keyword.rgb(colorName);
		return ctx.json({
			rgb
		})
	}
	else if(colorformat === "hsl"){
		const hsl = keyword.hsl(colorName);
		return ctx.json({
			hsl
		})
	}
	else if(colorformat === "hsv"){
		const hsv = keyword.hsv(colorName);
		return ctx.json({
			hsv
		})
	}
	else if(colorformat === "cmyk"){
		const cmyk = keyword.cmyk(colorName);
		return ctx.json({
			cmyk
		})
	}
	else if(colorformat === "hex"){
		const hex = keyword.hex(colorName);
		return ctx.json({
			hex
		})
	}
	else{
		return ctx.text(
			`Invalid Color Format`
		);
	}

})

export default app;