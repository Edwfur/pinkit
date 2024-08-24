"use client"

import React from "react"
import classes from "./index.module.scss"
import HTMLReactParser from "html-react-parser"
import { classMulti } from "../../utils"

declare interface SvgIconProps extends React.HTMLAttributes<HTMLSpanElement> {
	svg?: string
	size?: number | `${number}px` | `${number}rem` | `${number}em` | `${number}pt`
}

export default function SvgIcon({svg, size = 16, className, ...props}: SvgIconProps){
	return (
		<span {...props} className={classMulti(classes.root, className)} style={{fontSize: isNaN(Number(size)) ? size : `${Number(size)}px`}}>
			{HTMLReactParser(svg ?? "")}
		</span>
	)
}
