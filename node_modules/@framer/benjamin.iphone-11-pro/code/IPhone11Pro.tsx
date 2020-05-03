import * as React from "react"
import {
    Frame,
    addPropertyControls,
    ControlType,
    Navigation,
    RenderTarget,
} from "framer"
import { url } from "framer/resource"

const iphone11spacegrey = "./devices/iphone11-pro-space-grey.png"
const iphone11midnightgreen = "./devices/iphone11-pro-midnight-green.png"
const iphone11silver = "./devices/iphone11-pro-silver.png"
const iphone11gold = "./devices/iphone11-pro-gold.png"

const deviceWidth = Math.round(1415 / 3)
const deviceHeight = Math.round(2726 / 3)
const screenWidth = 375
const screenHeight = 812
const padding = 40

export function IPhone11Pro({ children, width, height, color, image, iphone }) {
    const frames = iphone || "spacegrey"
    const colors = {
        spacegrey: iphone11spacegrey,
        midnightgreen: iphone11midnightgreen,
        silver: iphone11silver,
        gold: iphone11gold,
    }

    // Scale -------------------------

    const scaleX = width / (deviceWidth + 2 * padding)
    const scaleY = height / (deviceHeight + 2 * padding)
    const scale = Math.min(scaleX, scaleY, 1)

    const child = children && children[0]
    const resizedChild =
        child && React.isValidElement(child)
            ? React.cloneElement(child, {
                  width: screenWidth,
                  height: screenHeight,
              })
            : null

    const isCanvas =
        RenderTarget.current() === RenderTarget.canvas ||
        RenderTarget.current() === RenderTarget.export
    const childWithNavigation = resizedChild ? (
        <Navigation>{resizedChild}</Navigation>
    ) : null

    return (
        <Frame
            size={"100%"}
            backgroundColor={color}
            image={image}
            overflow={"hidden"}
        >
            <div
                style={{
                    display: "flex",
                    placeItems: "center",
                    placeContent: "center",
                    width: "100%",
                    height: "100%",
                    transform: `scale(${scale})`,
                }}
            >
                <Frame
                    width={deviceWidth}
                    height={deviceHeight}
                    image={url(colors[frames])}
                    backgroundColor={"transparent"}
                    style={{
                        imageRendering: "auto",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                ></Frame>

                <Frame
                    center={true}
                    backgroundColor={"#000"}
                    style={{
                        width: screenWidth,
                        height: screenHeight,
                        WebkitMaskImage: makeMask(screenWidth, screenWidth),
                        maskSize: "contain",
                        WebkitMaskSize: "contain",
                    }}
                >
                    {isCanvas ? resizedChild : childWithNavigation}
                </Frame>
            </div>
        </Frame>
    )
}

function makeMask(screenWidth, screenHeight) {
    const path =
        '<path d="M292 8.667V9c0 9.265-7.069 21-23.333 21h-162C90.402 30 83.333 18.265 83.333 9v-.333c0-4.285 0-8.667-7.666-8.667H43.333C16.312 0 0 16.312 0 43.333v725.334C0 795.688 16.312 812 43.333 812h288.334C358.688 812 375 795.688 375 768.667V43.333C375 16.312 358.688 0 331.667 0h-32C292 0 292 4.382 292 8.667z" />'

    const encoded = encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" viewport="0 0 ${screenWidth} ${screenHeight}" preserveAspectRatio="none"><g x="0" y="0">${path}</g></svg>`
    )
    return `url("data:image/svg+xml;utf8,${encoded}")`
}

IPhone11Pro.defaultProps = {
    color: "#000",
    width: 1200,
    height: 1200,
    iphone: "spacegrey",
}

IPhone11Pro.displayName = "iPhone 11 Pro"

addPropertyControls(IPhone11Pro, {
    iphone: {
        type: ControlType.Enum,
        options: ["spacegrey", "midnightgreen", "silver", "gold"],
        optionTitles: ["Space Grey", "Midnight Green", "Silver", "Gold"],
        title: "Color",
    },
    color: { type: ControlType.Color, title: "Fill" },
    image: {
        type: ControlType.File,
        allowedFileTypes: ["jpg", "png", "jpeg"],
        title: "Image",
    },
})
