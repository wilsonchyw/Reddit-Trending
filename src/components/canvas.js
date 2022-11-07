import "custom.css";
import React, { useEffect } from "react";

export default function Canvas() {
    useEffect(() => {
        async function typeTopic() {
            const sleep = async () => new Promise((resolve) => setTimeout(resolve, 100));
            const text = "Reddit Trending";
            const el = document.getElementById("topic");
            for (let s of text) {
                el.innerHTML+=s
                await sleep()
            }
        }
        typeTopic()
    }, []);
    const spanStyle = {
        position: "absolute",
        display: "block",
        fontStyle: "normal",
        fontVariantCaps: "normal",
        fontWeight: "normal",
        fontStretch: "normal",
        whiteSpace: "nowrap",
        fontFamily: "sans-serif",
    };
    return (
        <div
            id="html-canvas"
            className="canvas"
            style={{
                width: 1200,
                height: 600,
                backgroundColor: "rgba(255, 255, 255, 0)",
                position: "relative",
            }}
        >
            <span
                className="main-tag"
                id="topic"
                style={{
                    ...spanStyle,
                    fontSize: "139.95494873052107px",
                    lineHeight: "139.95494873052107px",
                    left: "122.4453125px",
                    top: "238.5px",
                    width: "952.109375px",
                    height: 140,
                    color: "white",
                }}
            ></span>
            <span
                className="zoom test2"
                style={{
                    ...spanStyle,
                    fontSize: "28.41968562206996px",
                    lineHeight: "28.41968562206996px",
                    left: 561,
                    top: "359.132125751172px",
                    width: 56,
                    height: "28.41968562206996px",
                    color: "rgb(144, 205, 244)",
                }}
            >
                BTC
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "1.171875px",
                    lineHeight: "1.171875px",
                    left: "596.999267578125px",
                    top: "294.03125px",
                    width: "3.00146484375px",
                    height: "1.171875px",
                    color: "rgb(196, 241, 249)",
                }}
            >
                Bitcoin
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "47.48017373123326px",
                    lineHeight: "47.48017373123326px",
                    left: "569.9013671875px",
                    top: "190.0079305075067px",
                    width: "133.197265625px",
                    height: "47.48017373123326px",
                    color: "#728FEA",
                }}
            >
                ROSE
            </span>
            <span
                className="zoom test3"
                style={{
                    ...spanStyle,
                    fontSize: "28.41968562206996px",
                    lineHeight: "28.41968562206996px",
                    left: 530,
                    top: "207.13212575117203px",
                    width: 42,
                    height: "28.41968562206996px",
                    color: "#A0AEC0",
                }}
            >
                ON
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "28.41968562206996px",
                    lineHeight: "28.41968562206996px",
                    left: "645.8759765625px",
                    top: "359.132125751172px",
                    width: "76.248046875px",
                    height: "28.41968562206996px",
                    color: "rgb(208, 220, 251)",
                }}
            >
                BENE
            </span>
            <span
                className="zoom test2"
                style={{
                    ...spanStyle,
                    fontSize: "47.48017373123326px",
                    lineHeight: "47.48017373123326px",
                    left: "466.94189453125px",
                    top: "361.00793050750667px",
                    width: "73.1162109375px",
                    height: "47.48017373123326px",
                    color: "rgb(170, 192, 254)",
                }}
            >
                GO
            </span>
            <span
                className="zoom test2"
                style={{
                    ...spanStyle,
                    fontSize: "1.171875px",
                    lineHeight: "1.171875px",
                    left: "597.77783203125px",
                    top: "313.03125px",
                    width: "1.4443359375px",
                    height: "1.171875px",
                    color: "rgb(190, 227, 248)",
                }}
            >
                DD
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "5.770989437554294px",
                    lineHeight: "5.770989437554294px",
                    left: "639.16650390625px",
                    top: "254.1px",
                    width: "13.6669921875px",
                    height: 6,
                    color: "rgb(208, 220, 251)",
                }}
            >
                GME
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "5.770989437554294px",
                    lineHeight: "5.770989437554294px",
                    left: "523.6650390625px",
                    top: "311.1px",
                    width: "16.669921875px",
                    height: 6,
                    color: "rgb(196, 241, 249)",
                }}
            >
                NVDA
            </span>
            <span
                className="zoom test3"
                style={{
                    ...spanStyle,
                    fontSize: "47.48017373123326px",
                    lineHeight: "47.48017373123326px",
                    left: "582.04052734375px",
                    top: "399.00793050750667px",
                    width: "127.9189453125px",
                    height: "47.48017373123326px",
                    color: "rgb(196, 241, 249)",
                }}
            >
                MSFT
            </span>
            <span
                className="zoom test2"
                style={{
                    ...spanStyle,
                    fontSize: "1.171875px",
                    lineHeight: "1.171875px",
                    left: "540.722412109375px",
                    top: "294.03125px",
                    width: "1.55517578125px",
                    height: "1.171875px",
                    color: "rgb(170, 192, 254)",
                }}
            >
                MC
            </span>
            <span
                className="zoom test2"
                style={{
                    ...spanStyle,
                    fontSize: "14.664260780675605px",
                    lineHeight: "14.664260780675605px",
                    left: "593.918701171875px",
                    top: "326.5px",
                    width: "9.16259765625px",
                    height: 15,
                    color: "#00A3C4",
                }}
            >
                F
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "1.171875px",
                    lineHeight: "1.171875px",
                    left: "540.2587890625px",
                    top: "332.03125px",
                    width: "2.482421875px",
                    height: "1.171875px",
                    color: "rgb(190, 227, 248)",
                }}
            >
                PLTR
            </span>
            <span
                className="zoom test3"
                style={{
                    ...spanStyle,
                    fontSize: "28.41968562206996px",
                    lineHeight: "28.41968562206996px",
                    left: "713.7861328125px",
                    top: "226.13212575117203px",
                    width: "54.427734375px",
                    height: "28.41968562206996px",
                    color: "rgb(208, 220, 251)",
                }}
            >
                NFT
            </span>
            <span
                className="zoom test2"
                style={{
                    ...spanStyle,
                    fontSize: "14.664260780675605px",
                    lineHeight: "14.664260780675605px",
                    left: "668.996337890625px",
                    top: "250.5px",
                    width: "30.00732421875px",
                    height: 15,
                    color: "rgb(170, 192, 254)",
                }}
            >
                LRC
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "14.664260780675605px",
                    lineHeight: "14.664260780675605px",
                    left: "496.74755859375px",
                    top: "231.5px",
                    width: "32.5048828125px",
                    height: 15,
                    color: "rgb(190, 227, 248)",
                }}
            >
                ONE
            </span>
            <span
                className="zoom test2"
                style={{
                    ...spanStyle,
                    fontSize: "47.48017373123326px",
                    lineHeight: "47.48017373123326px",
                    left: "487.25px",
                    top: "152.0079305075067px",
                    width: "70.5px",
                    height: "47.48017373123326px",
                    color: "#A0AEC0",
                }}
            >
                PM
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "1.171875px",
                    lineHeight: "1.171875px",
                    left: "597.805419921875px",
                    top: "351.03125px",
                    width: "1.38916015625px",
                    height: "1.171875px",
                    color: "rgb(196, 241, 249)",
                }}
            >
                UK
            </span>
            <span
                className="zoom test2"
                style={{
                    ...spanStyle,
                    fontSize: "47.48017373123326px",
                    lineHeight: "47.48017373123326px",
                    left: 580,
                    top: "133.0079305075067px",
                    width: 94,
                    height: "47.48017373123326px",
                    color: "#A0AEC0",
                }}
            >
                ETH
            </span>
            <span
                className="zoom test3"
                style={{
                    ...spanStyle,
                    fontSize: "5.770989437554294px",
                    lineHeight: "5.770989437554294px",
                    left: 488,
                    top: "216.1px",
                    width: 12,
                    height: 6,
                    color: "rgb(190, 227, 248)",
                }}
            >
                DPZ
            </span>
            <span
                className="zoom test2"
                style={{
                    ...spanStyle,
                    fontSize: "5.770989437554294px",
                    lineHeight: "5.770989437554294px",
                    left: "466.5009765625px",
                    top: "235.1px",
                    width: "16.998046875px",
                    height: 6,
                    color: "#A0AEC0",
                }}
            >
                FORD
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "47.48017373123326px",
                    lineHeight: "47.48017373123326px",
                    left: "716.546630859375px",
                    top: "171.0079305075067px",
                    width: "67.90673828125px",
                    height: "47.48017373123326px",
                    color: "rgb(190, 227, 248)",
                }}
            >
                KO
            </span>
            <span
                className="zoom test2"
                style={{
                    ...spanStyle,
                    fontSize: "14.664260780675605px",
                    lineHeight: "14.664260780675605px",
                    left: "740.418701171875px",
                    top: "364.5px",
                    width: "39.16259765625px",
                    height: 15,
                    color: "rgb(196, 241, 249)",
                }}
            >
                WISH
            </span>
            <span
                className="zoom test2"
                style={{
                    ...spanStyle,
                    fontSize: "1.171875px",
                    lineHeight: "1.171875px",
                    left: "521.221435546875px",
                    top: "332.03125px",
                    width: "2.55712890625px",
                    height: "1.171875px",
                    color: "rgb(170, 192, 254)",
                }}
            >
                PYPL
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "47.48017373123326px",
                    lineHeight: "47.48017373123326px",
                    left: "374.546630859375px",
                    top: "190.0079305075067px",
                    width: "67.90673828125px",
                    height: "47.48017373123326px",
                    color: "rgb(196, 241, 249)",
                }}
            >
                SQ
            </span>
            <span
                className="zoom test3"
                style={{
                    ...spanStyle,
                    fontSize: "28.41968562206996px",
                    lineHeight: "28.41968562206996px",
                    left: "473.9345703125px",
                    top: "416.132125751172px",
                    width: "59.130859375px",
                    height: "28.41968562206996px",
                    color: "#728FEA",
                }}
            >
                OXY
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "28.41968562206996px",
                    lineHeight: "28.41968562206996px",
                    left: "398.7138671875px",
                    top: "359.132125751172px",
                    width: "57.572265625px",
                    height: "28.41968562206996px",
                    color: "#728FEA",
                }}
            >
                ADA
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "14.664260780675605px",
                    lineHeight: "14.664260780675605px",
                    left: "532.24267578125px",
                    top: "402.5px",
                    width: "37.5146484375px",
                    height: 15,
                    color: "#A0AEC0",
                }}
            >
                TSLA
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "1.171875px",
                    lineHeight: "1.171875px",
                    left: "540.138427734375px",
                    top: "351.03125px",
                    width: "2.72314453125px",
                    height: "1.171875px",
                    color: "rgb(208, 220, 251)",
                }}
            >
                SCVX
            </span>
            <span
                className="zoom test3"
                style={{
                    ...spanStyle,
                    fontSize: "1.171875px",
                    lineHeight: "1.171875px",
                    left: "635.45361328125px",
                    top: "370.03125px",
                    width: "2.0927734375px",
                    height: "1.171875px",
                    color: "rgb(196, 241, 249)",
                }}
            >
                TAIT
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "1.171875px",
                    lineHeight: "1.171875px",
                    left: "635.138427734375px",
                    top: "389.03125px",
                    width: "2.72314453125px",
                    height: "1.171875px",
                    color: "rgb(208, 220, 251)",
                }}
            >
                SEAH
            </span>
            <span
                className="zoom test2"
                style={{
                    ...spanStyle,
                    fontSize: "47.48017373123326px",
                    lineHeight: "47.48017373123326px",
                    left: "717.279052734375px",
                    top: "399.00793050750667px",
                    width: "104.44189453125px",
                    height: "47.48017373123326px",
                    color: "#A0AEC0",
                }}
            >
                AMC
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "5.770989437554294px",
                    lineHeight: "5.770989437554294px",
                    left: "736.6669921875px",
                    top: "387.1px",
                    width: "8.666015625px",
                    height: 6,
                    color: "rgb(196, 241, 249)",
                }}
            >
                RC
            </span>
            <span
                className="zoom test3"
                style={{
                    ...spanStyle,
                    fontSize: "1.171875px",
                    lineHeight: "1.171875px",
                    left: "768.536865234375px",
                    top: "313.03125px",
                    width: "1.92626953125px",
                    height: "1.171875px",
                    color: "rgb(208, 220, 251)",
                }}
            >
                ATH
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "1.171875px",
                    lineHeight: "1.171875px",
                    left: "464.564453125px",
                    top: "218.03125px",
                    width: "1.87109375px",
                    height: "1.171875px",
                    color: "#A0AEC0",
                }}
            >
                BAT
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "28.41968562206996px",
                    lineHeight: "28.41968562206996px",
                    left: 796,
                    top: "226.13212575117203px",
                    width: 42,
                    height: "28.41968562206996px",
                    color: "rgb(208, 220, 251)",
                }}
            >
                MP
            </span>
            <span
                className="zoom test2"
                style={{
                    ...spanStyle,
                    fontSize: "5.770989437554294px",
                    lineHeight: "5.770989437554294px",
                    left: "767.4990234375px",
                    top: "330.1px",
                    width: "4.001953125px",
                    height: 6,
                    color: "#A0AEC0",
                }}
            >
                B
            </span>
            <span
                className="zoom test2"
                style={{
                    ...spanStyle,
                    fontSize: "14.664260780675605px",
                    lineHeight: "14.664260780675605px",
                    left: "435.25px",
                    top: "174.5px",
                    width: "22.5px",
                    height: 15,
                    color: "rgb(144, 205, 244)",
                }}
            >
                AM
            </span>
            <span
                className="zoom test3"
                style={{
                    ...spanStyle,
                    fontSize: "5.770989437554294px",
                    lineHeight: "5.770989437554294px",
                    left: "393.8349609375px",
                    top: "254.1px",
                    width: "10.330078125px",
                    height: 6,
                    color: "#728FEA",
                }}
            >
                ZIM
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "1.171875px",
                    lineHeight: "1.171875px",
                    left: "464.861083984375px",
                    top: "199.03125px",
                    width: "1.27783203125px",
                    height: "1.171875px",
                    color: "rgb(170, 192, 254)",
                }}
            >
                FB
            </span>
            <span
                className="zoom test2"
                style={{
                    ...spanStyle,
                    fontSize: "5.770989437554294px",
                    lineHeight: "5.770989437554294px",
                    left: "791.66455078125px",
                    top: "216.1px",
                    width: "12.6708984375px",
                    height: 6,
                    color: "rgb(144, 205, 244)",
                }}
            >
                PEG
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "14.664260780675605px",
                    lineHeight: "14.664260780675605px",
                    left: "528.580078125px",
                    top: "136.5px",
                    width: "25.83984375px",
                    height: 15,
                    color: "rgb(208, 220, 251)",
                }}
            >
                BIG
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "5.770989437554294px",
                    lineHeight: "5.770989437554294px",
                    left: "767.4990234375px",
                    top: "349.1px",
                    width: "4.001953125px",
                    height: 6,
                    color: "rgb(170, 192, 254)",
                }}
            >
                K
            </span>
            <span
                className="zoom test3"
                style={{
                    ...spanStyle,
                    fontSize: "1.171875px",
                    lineHeight: "1.171875px",
                    left: "692.5px",
                    top: "180.03125px",
                    width: 2,
                    height: "1.171875px",
                    color: "rgb(196, 241, 249)",
                }}
            >
                ZRX
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "1.171875px",
                    lineHeight: "1.171875px",
                    left: "806.41650390625px",
                    top: "275.03125px",
                    width: "2.1669921875px",
                    height: "1.171875px",
                    color: "#A0AEC0",
                }}
            >
                CEO
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "1.171875px",
                    lineHeight: "1.171875px",
                    left: "560.138916015625px",
                    top: "427.03125px",
                    width: "0.72216796875px",
                    height: "1.171875px",
                    color: "#A0AEC0",
                }}
            >
                D
            </span>
            <span
                className="zoom test2"
                style={{
                    ...spanStyle,
                    fontSize: "28.41968562206996px",
                    lineHeight: "28.41968562206996px",
                    left: "797.7138671875px",
                    top: "359.132125751172px",
                    width: "57.572265625px",
                    height: "28.41968562206996px",
                    color: "#728FEA",
                }}
            >
                BNB
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "14.664260780675605px",
                    lineHeight: "14.664260780675605px",
                    left: "535.99267578125px",
                    top: "440.5px",
                    width: "30.0146484375px",
                    height: 15,
                    color: "rgb(208, 220, 251)",
                }}
            >
                SOL
            </span>
            <span
                className="zoom test3"
                style={{
                    ...spanStyle,
                    fontSize: "5.770989437554294px",
                    lineHeight: "5.770989437554294px",
                    left: "430.83154296875px",
                    top: "406.1px",
                    width: "12.3369140625px",
                    height: 6,
                    color: "rgb(208, 220, 251)",
                }}
            >
                XRP
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "47.48017373123326px",
                    lineHeight: "47.48017373123326px",
                    left: "564.314208984375px",
                    top: "456.00793050750667px",
                    width: "125.37158203125px",
                    height: "47.48017373123326px",
                    color: "#A0AEC0",
                }}
            >
                LUNA
            </span>
            <span
                className="zoom test3"
                style={{
                    ...spanStyle,
                    fontSize: "1.171875px",
                    lineHeight: "1.171875px",
                    left: "388.027587890625px",
                    top: "275.03125px",
                    width: "2.94482421875px",
                    height: "1.171875px",
                    color: "#A0AEC0",
                }}
            >
                DOGE
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "5.770989437554294px",
                    lineHeight: "5.770989437554294px",
                    left: "772.66748046875px",
                    top: "387.1px",
                    width: "12.6650390625px",
                    height: 6,
                    color: "rgb(196, 241, 249)",
                }}
            >
                DOT
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "28.41968562206996px",
                    lineHeight: "28.41968562206996px",
                    left: "696.212890625px",
                    top: "131.13212575117203px",
                    width: "70.57421875px",
                    height: "28.41968562206996px",
                    color: "rgb(144, 205, 244)",
                }}
            >
                AVAX
            </span>
            <span
                className="zoom test3"
                style={{
                    ...spanStyle,
                    fontSize: "5.770989437554294px",
                    lineHeight: "5.770989437554294px",
                    left: "485.33544921875px",
                    top: "140.1px",
                    width: "17.3291015625px",
                    height: 6,
                    color: "rgb(208, 220, 251)",
                }}
            >
                MCMJ
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "28.41968562206996px",
                    lineHeight: "28.41968562206996px",
                    left: "492.94140625px",
                    top: "454.132125751172px",
                    width: "59.1171875px",
                    height: "28.41968562206996px",
                    color: "#728FEA",
                }}
            >
                CAN
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "14.664260780675605px",
                    lineHeight: "14.664260780675605px",
                    left: "419.4951171875px",
                    top: "421.5px",
                    width: "35.009765625px",
                    height: 15,
                    color: "rgb(208, 220, 251)",
                }}
            >
                SHIB
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "1.171875px",
                    lineHeight: "1.171875px",
                    left: "787.41650390625px",
                    top: "370.03125px",
                    width: "2.1669921875px",
                    height: "1.171875px",
                    color: "rgb(170, 192, 254)",
                }}
            >
                DAO
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "1.171875px",
                    lineHeight: "1.171875px",
                    left: "844.49951171875px",
                    top: "313.03125px",
                    width: "2.0009765625px",
                    height: "1.171875px",
                    color: "rgb(208, 220, 251)",
                }}
            >
                PSA
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "5.770989437554294px",
                    lineHeight: "5.770989437554294px",
                    left: "447.99609375px",
                    top: "159.1px",
                    width: "16.0078125px",
                    height: 6,
                    color: "#A0AEC0",
                }}
            >
                BBBY
            </span>
            <span
                className="zoom test3"
                style={{
                    ...spanStyle,
                    fontSize: "28.41968562206996px",
                    lineHeight: "28.41968562206996px",
                    left: "398.8759765625px",
                    top: "435.132125751172px",
                    width: "76.248046875px",
                    height: "28.41968562206996px",
                    color: "#728FEA",
                }}
            >
                ESSC
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "28.41968562206996px",
                    lineHeight: "28.41968562206996px",
                    left: "588.0966796875px",
                    top: "93.13212575117201px",
                    width: "77.806640625px",
                    height: "28.41968562206996px",
                    color: "#A0AEC0",
                }}
            >
                SAGE
            </span>
            <span
                className="zoom test3"
                style={{
                    ...spanStyle,
                    fontSize: "47.48017373123326px",
                    lineHeight: "47.48017373123326px",
                    left: "299.279052734375px",
                    top: "399.00793050750667px",
                    width: "104.44189453125px",
                    height: "47.48017373123326px",
                    color: "rgb(144, 205, 244)",
                }}
            >
                AMD
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "14.664260780675605px",
                    lineHeight: "14.664260780675605px",
                    left: "363.883056640625px",
                    top: "364.5px",
                    width: "32.23388671875px",
                    height: 15,
                    color: "rgb(170, 192, 254)",
                }}
            >
                ATVI
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "1.171875px",
                    lineHeight: "1.171875px",
                    left: "844.83349609375px",
                    top: "256.03125px",
                    width: "1.3330078125px",
                    height: "1.171875px",
                    color: "#00A3C4",
                }}
            >
                CF
            </span>
            <span
                className="zoom test2"
                style={{
                    ...spanStyle,
                    fontSize: "28.41968562206996px",
                    lineHeight: "28.41968562206996px",
                    left: "826.662109375px",
                    top: "188.13212575117203px",
                    width: "18.67578125px",
                    height: "28.41968562206996px",
                    color: "rgb(170, 192, 254)",
                }}
            >
                V
            </span>
            <span
                className="zoom test3"
                style={{
                    ...spanStyle,
                    fontSize: "1.171875px",
                    lineHeight: "1.171875px",
                    left: "673.8330078125px",
                    top: "446.03125px",
                    width: "1.333984375px",
                    height: "1.171875px",
                    color: "rgb(190, 227, 248)",
                }}
            >
                EV
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "47.48017373123326px",
                    lineHeight: "47.48017373123326px",
                    left: "467.67431640625px",
                    top: "76.0079305075067px",
                    width: "109.6513671875px",
                    height: "47.48017373123326px",
                    color: "rgb(208, 220, 251)",
                }}
            >
                INTC
            </span>
            <span
                className="zoom test2"
                style={{
                    ...spanStyle,
                    fontSize: "28.41968562206996px",
                    lineHeight: "28.41968562206996px",
                    left: "339.3896484375px",
                    top: "150.13212575117203px",
                    width: "62.220703125px",
                    height: "28.41968562206996px",
                    color: "#728FEA",
                }}
            >
                OCC
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "47.48017373123326px",
                    lineHeight: "47.48017373123326px",
                    left: "222.32568359375px",
                    top: "209.0079305075067px",
                    width: "125.3486328125px",
                    height: "47.48017373123326px",
                    color: "rgb(144, 205, 244)",
                }}
            >
                UPST
            </span>
            <span
                className="zoom test3"
                style={{
                    ...spanStyle,
                    fontSize: "1.171875px",
                    lineHeight: "1.171875px",
                    left: "844.083251953125px",
                    top: "332.03125px",
                    width: "2.83349609375px",
                    height: "1.171875px",
                    color: "#728FEA",
                }}
            >
                USDC
            </span>
            <span
                className="zoom test3"
                style={{
                    ...spanStyle,
                    fontSize: "28.41968562206996px",
                    lineHeight: "28.41968562206996px",
                    left: "296.7001953125px",
                    top: "359.132125751172px",
                    width: "71.599609375px",
                    height: "28.41968562206996px",
                    color: "#A0AEC0",
                }}
            >
                AAPL
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "5.770989437554294px",
                    lineHeight: "5.770989437554294px",
                    left: "675.9990234375px",
                    top: "121.1px",
                    width: "16.001953125px",
                    height: 6,
                    color: "#728FEA",
                }}
            >
                BREZ
            </span>
            <span
                className="zoom test3"
                style={{
                    ...spanStyle,
                    fontSize: "1.171875px",
                    lineHeight: "1.171875px",
                    left: "806.41650390625px",
                    top: "199.03125px",
                    width: "2.1669921875px",
                    height: "1.171875px",
                    color: "#A0AEC0",
                }}
            >
                GDP
            </span>
            <span
                className="zoom test3"
                style={{
                    ...spanStyle,
                    fontSize: "5.770989437554294px",
                    lineHeight: "5.770989437554294px",
                    left: "450.16845703125px",
                    top: "140.1px",
                    width: "11.6630859375px",
                    height: 6,
                    color: "#A0AEC0",
                }}
            >
                FCF
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "14.664260780675605px",
                    lineHeight: "14.664260780675605px",
                    left: "815.16259765625px",
                    top: "174.5px",
                    width: "41.6748046875px",
                    height: 15,
                    color: "rgb(170, 192, 254)",
                }}
            >
                NEAR
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "5.770989437554294px",
                    lineHeight: "5.770989437554294px",
                    left: "693.888671875px",
                    top: "463.1px",
                    width: "18.22265625px",
                    height: 6,
                    color: "#728FEA",
                }}
            >
                MATIC
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "28.41968562206996px",
                    lineHeight: "28.41968562206996px",
                    left: "701.779296875px",
                    top: "93.13212575117201px",
                    width: "40.44140625px",
                    height: "28.41968562206996px",
                    color: "rgb(144, 205, 244)",
                }}
            >
                CC
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "47.48017373123326px",
                    lineHeight: "47.48017373123326px",
                    left: 732,
                    top: "456.00793050750667px",
                    width: 94,
                    height: "47.48017373123326px",
                    color: "#00A3C4",
                }}
            >
                NET
            </span>
            <span
                className="zoom test3"
                style={{
                    ...spanStyle,
                    fontSize: "5.770989437554294px",
                    lineHeight: "5.770989437554294px",
                    left: "868.052734375px",
                    top: "235.1px",
                    width: "11.89453125px",
                    height: 6,
                    color: "rgb(190, 227, 248)",
                }}
            >
                PAC
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "47.48017373123326px",
                    lineHeight: "47.48017373123326px",
                    left: "321.604736328125px",
                    top: "95.0079305075067px",
                    width: "135.79052734375px",
                    height: "47.48017373123326px",
                    color: "rgb(190, 227, 248)",
                }}
            >
                PUMP
            </span>
            <span
                className="zoom test2"
                style={{
                    ...spanStyle,
                    fontSize: "5.770989437554294px",
                    lineHeight: "5.770989437554294px",
                    left: "809.1630859375px",
                    top: "159.1px",
                    width: "15.673828125px",
                    height: 6,
                    color: "#728FEA",
                }}
            >
                ROLL
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "14.664260780675605px",
                    lineHeight: "14.664260780675605px",
                    left: "858.168701171875px",
                    top: "364.5px",
                    width: "31.66259765625px",
                    height: 15,
                    color: "rgb(170, 192, 254)",
                }}
            >
                OUT
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "1.171875px",
                    lineHeight: "1.171875px",
                    left: "331.101318359375px",
                    top: "313.03125px",
                    width: "2.79736328125px",
                    height: "1.171875px",
                    color: "rgb(144, 205, 244)",
                }}
            >
                ATOM
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "28.41968562206996px",
                    lineHeight: "28.41968562206996px",
                    left: "396.5517578125px",
                    top: "473.132125751172px",
                    width: "80.896484375px",
                    height: "28.41968562206996px",
                    color: "rgb(208, 220, 251)",
                }}
            >
                AMCX
            </span>
            <span
                className="zoom test3"
                style={{
                    ...spanStyle,
                    fontSize: "28.41968562206996px",
                    lineHeight: "28.41968562206996px",
                    left: "835.8759765625px",
                    top: "397.132125751172px",
                    width: "76.248046875px",
                    height: "28.41968562206996px",
                    color: "#A0AEC0",
                }}
            >
                BHSE
            </span>
            <span
                className="zoom test3"
                style={{
                    ...spanStyle,
                    fontSize: "1.171875px",
                    lineHeight: "1.171875px",
                    left: 541,
                    top: "123.03125px",
                    width: 1,
                    height: "1.171875px",
                    color: "#A0AEC0",
                }}
            >
                UI
            </span>
            <span
                className="zoom test2"
                style={{
                    ...spanStyle,
                    fontSize: "47.48017373123326px",
                    lineHeight: "47.48017373123326px",
                    left: "623.220947265625px",
                    top: "38.0079305075067px",
                    width: "83.55810546875px",
                    height: "47.48017373123326px",
                    color: "rgb(170, 192, 254)",
                }}
            >
                NIO
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "14.664260780675605px",
                    lineHeight: "14.664260780675605px",
                    left: "875.919921875px",
                    top: "212.5px",
                    width: "34.16015625px",
                    height: 15,
                    color: "#728FEA",
                }}
            >
                CMC
            </span>
            <span
                className="zoom test2"
                style={{
                    ...spanStyle,
                    fontSize: "1.171875px",
                    lineHeight: "1.171875px",
                    left: "426.77783203125px",
                    top: "161.03125px",
                    width: "1.4443359375px",
                    height: "1.171875px",
                    color: "rgb(208, 220, 251)",
                }}
            >
                RH
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "14.664260780675605px",
                    lineHeight: "14.664260780675605px",
                    left: "745.003662109375px",
                    top: "117.5px",
                    width: "29.99267578125px",
                    height: 15,
                    color: "rgb(196, 241, 249)",
                }}
            >
                TGT
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "5.770989437554294px",
                    lineHeight: "5.770989437554294px",
                    left: "865.66650390625px",
                    top: "387.1px",
                    width: "16.6669921875px",
                    height: 6,
                    color: "rgb(144, 205, 244)",
                }}
            >
                ZNGA
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "5.770989437554294px",
                    lineHeight: "5.770989437554294px",
                    left: "577.16650390625px",
                    top: "121.1px",
                    width: "4.6669921875px",
                    height: 6,
                    color: "#00A3C4",
                }}
            >
                G
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "28.41968562206996px",
                    lineHeight: "28.41968562206996px",
                    left: "492.779296875px",
                    top: "492.132125751172px",
                    width: "40.44140625px",
                    height: "28.41968562206996px",
                    color: "rgb(144, 205, 244)",
                }}
            >
                NU
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "14.664260780675605px",
                    lineHeight: "14.664260780675605px",
                    left: "300.9248046875px",
                    top: "193.5px",
                    width: "44.150390625px",
                    height: 15,
                    color: "#A0AEC0",
                }}
            >
                TTWO
            </span>
            <span
                className="zoom test2"
                style={{
                    ...spanStyle,
                    fontSize: "47.48017373123326px",
                    lineHeight: "47.48017373123326px",
                    left: "793.279052734375px",
                    top: "95.0079305075067px",
                    width: "104.44189453125px",
                    height: "47.48017373123326px",
                    color: "#A0AEC0",
                }}
            >
                CRO
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "28.41968562206996px",
                    lineHeight: "28.41968562206996px",
                    left: "560.6357421875px",
                    top: "511.132125751172px",
                    width: "75.728515625px",
                    height: "28.41968562206996px",
                    color: "rgb(190, 227, 248)",
                }}
            >
                HUYA
            </span>
            <span
                className="zoom test2"
                style={{
                    ...spanStyle,
                    fontSize: "28.41968562206996px",
                    lineHeight: "28.41968562206996px",
                    left: "892.103515625px",
                    top: "359.132125751172px",
                    width: "77.79296875px",
                    height: "28.41968562206996px",
                    color: "#A0AEC0",
                }}
            >
                BUSD
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "1.171875px",
                    lineHeight: "1.171875px",
                    left: "350.83349609375px",
                    top: "237.03125px",
                    width: "1.3330078125px",
                    height: "1.171875px",
                    color: "#728FEA",
                }}
            >
                TH
            </span>
            <span
                className="zoom test3"
                style={{
                    ...spanStyle,
                    fontSize: "14.664260780675605px",
                    lineHeight: "14.664260780675605px",
                    left: "855.66748046875px",
                    top: "193.5px",
                    width: "36.6650390625px",
                    height: 15,
                    color: "#A0AEC0",
                }}
            >
                CURI
            </span>
            <span
                className="zoom test3"
                style={{
                    ...spanStyle,
                    fontSize: "14.664260780675605px",
                    lineHeight: "14.664260780675605px",
                    left: "851.99755859375px",
                    top: "155.5px",
                    width: "25.0048828125px",
                    height: 15,
                    color: "rgb(170, 192, 254)",
                }}
            >
                ICP
            </span>
            <span
                className="zoom test2"
                style={{
                    ...spanStyle,
                    fontSize: "5.770989437554294px",
                    lineHeight: "5.770989437554294px",
                    left: "904.21728515625px",
                    top: "235.1px",
                    width: "15.5654296875px",
                    height: 6,
                    color: "#00A3C4",
                }}
            >
                AAVE
            </span>
            <span
                className="zoom test3"
                style={{
                    ...spanStyle,
                    fontSize: "1.171875px",
                    lineHeight: "1.171875px",
                    left: "863.66650390625px",
                    top: "218.03125px",
                    width: "1.6669921875px",
                    height: "1.171875px",
                    color: "rgb(190, 227, 248)",
                }}
            >
                IRS
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "47.48017373123326px",
                    lineHeight: "47.48017373123326px",
                    left: "902.70361328125px",
                    top: "171.0079305075067px",
                    width: "56.5927734375px",
                    height: "47.48017373123326px",
                    color: "#728FEA",
                }}
            >
                TA
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "14.664260780675605px",
                    lineHeight: "14.664260780675605px",
                    left: "778.4951171875px",
                    top: "155.5px",
                    width: "20.009765625px",
                    height: 15,
                    color: "rgb(196, 241, 249)",
                }}
            >
                PS
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "5.770989437554294px",
                    lineHeight: "5.770989437554294px",
                    left: "830.439453125px",
                    top: "444.1px",
                    width: "11.12109375px",
                    height: 6,
                    color: "#A0AEC0",
                }}
            >
                AVA
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "14.664260780675605px",
                    lineHeight: "14.664260780675605px",
                    left: "718.166259765625px",
                    top: "79.5px",
                    width: "26.66748046875px",
                    height: 15,
                    color: "#00A3C4",
                }}
            >
                IGC
            </span>
            <span
                className="zoom test3"
                style={{
                    ...spanStyle,
                    fontSize: "14.664260780675605px",
                    lineHeight: "14.664260780675605px",
                    left: "379.0849609375px",
                    top: "459.5px",
                    width: "20.830078125px",
                    height: 15,
                    color: "#A0AEC0",
                }}
            >
                TG
            </span>
            <span
                className="zoom test3"
                style={{
                    ...spanStyle,
                    fontSize: "28.41968562206996px",
                    lineHeight: "28.41968562206996px",
                    left: "683.8759765625px",
                    top: "511.132125751172px",
                    width: "76.248046875px",
                    height: "28.41968562206996px",
                    color: "#728FEA",
                }}
            >
                SBUX
            </span>
            <span
                className="zoom test3"
                style={{
                    ...spanStyle,
                    fontSize: "47.48017373123326px",
                    lineHeight: "47.48017373123326px",
                    left: "295.57568359375px",
                    top: "456.00793050750667px",
                    width: "54.8486328125px",
                    height: "47.48017373123326px",
                    color: "#00A3C4",
                }}
            >
                SJ
            </span>
            <span
                className="zoom test3"
                style={{
                    ...spanStyle,
                    fontSize: "28.41968562206996px",
                    lineHeight: "28.41968562206996px",
                    left: "227.734375px",
                    top: "359.132125751172px",
                    width: "57.53125px",
                    height: "28.41968562206996px",
                    color: "rgb(208, 220, 251)",
                }}
            >
                FTM
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "47.48017373123326px",
                    lineHeight: "47.48017373123326px",
                    left: "450.935791015625px",
                    top: "532.0079305075067px",
                    width: "86.12841796875px",
                    height: "47.48017373123326px",
                    color: "rgb(170, 192, 254)",
                }}
            >
                FTT
            </span>
            <span
                className="zoom test2"
                style={{
                    ...spanStyle,
                    fontSize: "47.48017373123326px",
                    lineHeight: "47.48017373123326px",
                    left: "831.854736328125px",
                    top: "456.00793050750667px",
                    width: "65.29052734375px",
                    height: "47.48017373123326px",
                    color: "rgb(144, 205, 244)",
                }}
            >
                AR
            </span>
            <span
                className="zoom test2"
                style={{
                    ...spanStyle,
                    fontSize: "14.664260780675605px",
                    lineHeight: "14.664260780675605px",
                    left: "552.07763671875px",
                    top: "60.5px",
                    width: "35.8447265625px",
                    height: 15,
                    color: "#A0AEC0",
                }}
            >
                BBIG
            </span>
            <span
                className="zoom test3"
                style={{
                    ...spanStyle,
                    fontSize: "28.41968562206996px",
                    lineHeight: "28.41968562206996px",
                    left: "246.0966796875px",
                    top: "131.13212575117203px",
                    width: "77.806640625px",
                    height: "28.41968562206996px",
                    color: "#A0AEC0",
                }}
            >
                SOLO
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "47.48017373123326px",
                    lineHeight: "47.48017373123326px",
                    left: 428,
                    top: "19.007930507506696px",
                    width: 94,
                    height: "47.48017373123326px",
                    color: "#00A3C4",
                }}
            >
                ETN
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "28.41968562206996px",
                    lineHeight: "28.41968562206996px",
                    left: "946.4482421875px",
                    top: "226.13212575117203px",
                    width: "45.103515625px",
                    height: "28.41968562206996px",
                    color: "#728FEA",
                }}
            >
                GM
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "14.664260780675605px",
                    lineHeight: "14.664260780675605px",
                    left: "286.916259765625px",
                    top: "174.5px",
                    width: "34.16748046875px",
                    height: 15,
                    color: "#728FEA",
                }}
            >
                BMO
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "47.48017373123326px",
                    lineHeight: "47.48017373123326px",
                    left: "909.8837890625px",
                    top: "399.00793050750667px",
                    width: "99.232421875px",
                    height: "47.48017373123326px",
                    color: "rgb(196, 241, 249)",
                }}
            >
                NYC
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "1.171875px",
                    lineHeight: "1.171875px",
                    left: "711.33349609375px",
                    top: "484.03125px",
                    width: "2.3330078125px",
                    height: "1.171875px",
                    color: "#00A3C4",
                }}
            >
                NEW
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "28.41968562206996px",
                    lineHeight: "28.41968562206996px",
                    left: "208.1103515625px",
                    top: "397.132125751172px",
                    width: "77.779296875px",
                    height: "28.41968562206996px",
                    color: "#00A3C4",
                }}
            >
                TEAM
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "5.770989437554294px",
                    lineHeight: "5.770989437554294px",
                    left: "671.3330078125px",
                    top: "102.1px",
                    width: "6.333984375px",
                    height: 6,
                    color: "rgb(190, 227, 248)",
                }}
            >
                OI
            </span>
            <span
                className="zoom test3"
                style={{
                    ...spanStyle,
                    fontSize: "1.171875px",
                    lineHeight: "1.171875px",
                    left: "293.11083984375px",
                    top: "275.03125px",
                    width: "2.7783203125px",
                    height: "1.171875px",
                    color: "rgb(144, 205, 244)",
                }}
            >
                VCRA
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "28.41968562206996px",
                    lineHeight: "28.41968562206996px",
                    left: "566.779296875px",
                    top: "549.132125751172px",
                    width: "82.44140625px",
                    height: "28.41968562206996px",
                    color: "rgb(196, 241, 249)",
                }}
            >
                DOCU
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "5.770989437554294px",
                    lineHeight: "5.770989437554294px",
                    left: "656.5009765625px",
                    top: "520.1px",
                    width: "16.998046875px",
                    height: 6,
                    color: "#A0AEC0",
                }}
            >
                AMZN
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "14.664260780675605px",
                    lineHeight: "14.664260780675605px",
                    left: "397.169921875px",
                    top: "79.5px",
                    width: "41.66015625px",
                    height: 15,
                    color: "rgb(208, 220, 251)",
                }}
            >
                TURN
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "14.664260780675605px",
                    lineHeight: "14.664260780675605px",
                    left: "776.83251953125px",
                    top: "79.5px",
                    width: "23.3349609375px",
                    height: 15,
                    color: "#A0AEC0",
                }}
            >
                BTI
            </span>
            <span
                className="zoom test2"
                style={{
                    ...spanStyle,
                    fontSize: "5.770989437554294px",
                    lineHeight: "5.770989437554294px",
                    left: "470.998046875px",
                    top: "520.1px",
                    width: "8.00390625px",
                    height: 6,
                    color: "#A0AEC0",
                }}
            >
                EA
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "1.171875px",
                    lineHeight: "1.171875px",
                    left: "787.453369140625px",
                    top: "142.03125px",
                    width: "2.09326171875px",
                    height: "1.171875px",
                    color: "rgb(196, 241, 249)",
                }}
            >
                CTO
            </span>
            <span
                className="zoom test3"
                style={{
                    ...spanStyle,
                    fontSize: "14.664260780675605px",
                    lineHeight: "14.664260780675605px",
                    left: "908.91748046875px",
                    top: "155.5px",
                    width: "44.1650390625px",
                    height: 15,
                    color: "#728FEA",
                }}
            >
                MRNA
            </span>
            <span
                className="zoom test3"
                style={{
                    ...spanStyle,
                    fontSize: "28.41968562206996px",
                    lineHeight: "28.41968562206996px",
                    left: "778.7138671875px",
                    top: "511.132125751172px",
                    width: "57.572265625px",
                    height: "28.41968562206996px",
                    color: "rgb(208, 220, 251)",
                }}
            >
                ANY
            </span>
            <span
                className="zoom test2"
                style={{
                    ...spanStyle,
                    fontSize: "47.48017373123326px",
                    lineHeight: "47.48017373123326px",
                    left: "355.546630859375px",
                    top: "513.0079305075067px",
                    width: "67.90673828125px",
                    height: "47.48017373123326px",
                    color: "rgb(208, 220, 251)",
                }}
            >
                GS
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "14.664260780675605px",
                    lineHeight: "14.664260780675605px",
                    left: "859.823974609375px",
                    top: "440.5px",
                    width: "28.35205078125px",
                    height: 15,
                    color: "#00A3C4",
                }}
            >
                ELA
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "28.41968562206996px",
                    lineHeight: "28.41968562206996px",
                    left: "207.1484375px",
                    top: "169.13212575117203px",
                    width: "60.703125px",
                    height: "28.41968562206996px",
                    color: "rgb(190, 227, 248)",
                }}
            >
                API3
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "47.48017373123326px",
                    lineHeight: "47.48017373123326px",
                    left: 737,
                    top: "19.007930507506696px",
                    width: 141,
                    height: "47.48017373123326px",
                    color: "rgb(190, 227, 248)",
                }}
            >
                PROM
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "5.770989437554294px",
                    lineHeight: "5.770989437554294px",
                    left: "905.83154296875px",
                    top: "140.1px",
                    width: "12.3369140625px",
                    height: 6,
                    color: "rgb(190, 227, 248)",
                }}
            >
                MLP
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "47.48017373123326px",
                    lineHeight: "47.48017373123326px",
                    left: "243.430419921875px",
                    top: "437.00793050750667px",
                    width: "26.13916015625px",
                    height: "47.48017373123326px",
                    color: "#00A3C4",
                }}
            >
                L
            </span>
            <span
                className="zoom test3"
                style={{
                    ...spanStyle,
                    fontSize: "1.171875px",
                    lineHeight: "1.171875px",
                    left: "540.24951171875px",
                    top: "503.03125px",
                    width: "2.5009765625px",
                    height: "1.171875px",
                    color: "#728FEA",
                }}
            >
                SELF
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "47.48017373123326px",
                    lineHeight: "47.48017373123326px",
                    left: "675.70947265625px",
                    top: "551.0079305075067px",
                    width: "130.5810546875px",
                    height: "47.48017373123326px",
                    color: "rgb(190, 227, 248)",
                }}
            >
                BYND
            </span>
            <span
                className="zoom test2"
                style={{
                    ...spanStyle,
                    fontSize: "28.41968562206996px",
                    lineHeight: "28.41968562206996px",
                    left: "979.927734375px",
                    top: "188.13212575117203px",
                    width: "73.14453125px",
                    height: "28.41968562206996px",
                    color: "rgb(196, 241, 249)",
                }}
            >
                REAL
            </span>
            <span
                className="zoom test3"
                style={{
                    ...spanStyle,
                    fontSize: "47.48017373123326px",
                    lineHeight: "47.48017373123326px",
                    left: "529.1513671875px",
                    top: "0.007930507506696216px",
                    width: "62.697265625px",
                    height: "47.48017373123326px",
                    color: "rgb(170, 192, 254)",
                }}
            >
                BX
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "5.770989437554294px",
                    lineHeight: "5.770989437554294px",
                    left: "656.6650390625px",
                    top: "539.1px",
                    width: "16.669921875px",
                    height: 6,
                    color: "rgb(144, 205, 244)",
                }}
            >
                CPSR
            </span>
            <span
                className="zoom test3"
                style={{
                    ...spanStyle,
                    fontSize: "28.41968562206996px",
                    lineHeight: "28.41968562206996px",
                    left: "130.5517578125px",
                    top: "359.132125751172px",
                    width: "80.896484375px",
                    height: "28.41968562206996px",
                    color: "rgb(170, 192, 254)",
                }}
            >
                ROKU
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "47.48017373123326px",
                    lineHeight: "47.48017373123326px",
                    left: "256.97705078125px",
                    top: "38.0079305075067px",
                    width: "94.0458984375px",
                    height: "47.48017373123326px",
                    color: "rgb(190, 227, 248)",
                }}
            >
                EPS
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "14.664260780675605px",
                    lineHeight: "14.664260780675605px",
                    left: "283.99755859375px",
                    top: "117.5px",
                    width: "40.0048828125px",
                    height: 15,
                    color: "rgb(196, 241, 249)",
                }}
            >
                FREE
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "5.770989437554294px",
                    lineHeight: "5.770989437554294px",
                    left: "637.99609375px",
                    top: "26.1px",
                    width: "16.0078125px",
                    height: 6,
                    color: "#728FEA",
                }}
            >
                BABA
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "28.41968562206996px",
                    lineHeight: "28.41968562206996px",
                    left: 922,
                    top: "454.132125751172px",
                    width: 56,
                    height: "28.41968562206996px",
                    color: "rgb(144, 205, 244)",
                }}
            >
                BTC
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "1.171875px",
                    lineHeight: "1.171875px",
                    left: "596.999267578125px",
                    top: "85.03125px",
                    width: "3.00146484375px",
                    height: "1.171875px",
                    color: "rgb(208, 220, 251)",
                }}
            >
                Bitcoin
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "47.48017373123326px",
                    lineHeight: "47.48017373123326px",
                    left: "854.9013671875px",
                    top: "513.0079305075067px",
                    width: "133.197265625px",
                    height: "47.48017373123326px",
                    color: "#A0AEC0",
                }}
            >
                ROSE
            </span>
            <span
                className="zoom test2"
                style={{
                    ...spanStyle,
                    fontSize: "28.41968562206996px",
                    lineHeight: "28.41968562206996px",
                    left: 169,
                    top: "207.13212575117203px",
                    width: 42,
                    height: "28.41968562206996px",
                    color: "rgb(208, 220, 251)",
                }}
            >
                ON
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "28.41968562206996px",
                    lineHeight: "28.41968562206996px",
                    left: "930.8759765625px",
                    top: "112.13212575117201px",
                    width: "76.248046875px",
                    height: "28.41968562206996px",
                    color: "#A0AEC0",
                }}
            >
                BENE
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "47.48017373123326px",
                    lineHeight: "47.48017373123326px",
                    left: "181.94189453125px",
                    top: "95.0079305075067px",
                    width: "73.1162109375px",
                    height: "47.48017373123326px",
                    color: "rgb(208, 220, 251)",
                }}
            >
                GO
            </span>
            <span
                className="zoom test3"
                style={{
                    ...spanStyle,
                    fontSize: "1.171875px",
                    lineHeight: "1.171875px",
                    left: "920.77783203125px",
                    top: "256.03125px",
                    width: "1.4443359375px",
                    height: "1.171875px",
                    color: "#00A3C4",
                }}
            >
                DD
            </span>
            <span
                className="zoom test3"
                style={{
                    ...spanStyle,
                    fontSize: "5.770989437554294px",
                    lineHeight: "5.770989437554294px",
                    left: "829.16650390625px",
                    top: "83.1px",
                    width: "13.6669921875px",
                    height: 6,
                    color: "rgb(208, 220, 251)",
                }}
            >
                GME
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "5.770989437554294px",
                    lineHeight: "5.770989437554294px",
                    left: "371.6650390625px",
                    top: "64.1px",
                    width: "16.669921875px",
                    height: 6,
                    color: "#00A3C4",
                }}
            >
                NVDA
            </span>
            <span
                className="zoom test2"
                style={{
                    ...spanStyle,
                    fontSize: "47.48017373123326px",
                    lineHeight: "47.48017373123326px",
                    left: "69.04052734375px",
                    top: "152.0079305075067px",
                    width: "127.9189453125px",
                    height: "47.48017373123326px",
                    color: "rgb(190, 227, 248)",
                }}
            >
                MSFT
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "1.171875px",
                    lineHeight: "1.171875px",
                    left: "274.722412109375px",
                    top: "256.03125px",
                    width: "1.55517578125px",
                    height: "1.171875px",
                    color: "rgb(144, 205, 244)",
                }}
            >
                MC
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "14.664260780675605px",
                    lineHeight: "14.664260780675605px",
                    left: "897.918701171875px",
                    top: "193.5px",
                    width: "9.16259765625px",
                    height: 15,
                    color: "#00A3C4",
                }}
            >
                F
            </span>
            <span
                className="zoom test2"
                style={{
                    ...spanStyle,
                    fontSize: "1.171875px",
                    lineHeight: "1.171875px",
                    left: "293.2587890625px",
                    top: "408.03125px",
                    width: "2.482421875px",
                    height: "1.171875px",
                    color: "#A0AEC0",
                }}
            >
                PLTR
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "28.41968562206996px",
                    lineHeight: "28.41968562206996px",
                    left: "979.7861328125px",
                    top: "150.13212575117203px",
                    width: "54.427734375px",
                    height: "28.41968562206996px",
                    color: "rgb(170, 192, 254)",
                }}
            >
                NFT
            </span>
            <span
                className="zoom test2"
                style={{
                    ...spanStyle,
                    fontSize: "14.664260780675605px",
                    lineHeight: "14.664260780675605px",
                    left: "212.996337890625px",
                    top: "155.5px",
                    width: "30.00732421875px",
                    height: 15,
                    color: "rgb(190, 227, 248)",
                }}
            >
                LRC
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "14.664260780675605px",
                    lineHeight: "14.664260780675605px",
                    left: "686.74755859375px",
                    top: "22.5px",
                    width: "32.5048828125px",
                    height: 15,
                    color: "rgb(208, 220, 251)",
                }}
            >
                ONE
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "47.48017373123326px",
                    lineHeight: "47.48017373123326px",
                    left: "240.25px",
                    top: "513.0079305075067px",
                    width: "70.5px",
                    height: "47.48017373123326px",
                    color: "#00A3C4",
                }}
            >
                PM
            </span>
            <span
                className="zoom test2"
                style={{
                    ...spanStyle,
                    fontSize: "1.171875px",
                    lineHeight: "1.171875px",
                    left: "597.805419921875px",
                    top: "66.03125px",
                    width: "1.38916015625px",
                    height: "1.171875px",
                    color: "rgb(170, 192, 254)",
                }}
            >
                UK
            </span>
            <span
                className="zoom test2"
                style={{
                    ...spanStyle,
                    fontSize: "47.48017373123326px",
                    lineHeight: "47.48017373123326px",
                    left: 124,
                    top: "437.00793050750667px",
                    width: 94,
                    height: "47.48017373123326px",
                    color: "rgb(208, 220, 251)",
                }}
            >
                ETH
            </span>
            <span
                className="zoom test3"
                style={{
                    ...spanStyle,
                    fontSize: "5.770989437554294px",
                    lineHeight: "5.770989437554294px",
                    left: 393,
                    top: "45.1px",
                    width: 12,
                    height: 6,
                    color: "rgb(208, 220, 251)",
                }}
            >
                DPZ
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "5.770989437554294px",
                    lineHeight: "5.770989437554294px",
                    left: "979.5009765625px",
                    top: "387.1px",
                    width: "16.998046875px",
                    height: 6,
                    color: "#728FEA",
                }}
            >
                FORD
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "47.48017373123326px",
                    lineHeight: "47.48017373123326px",
                    left: "925.546630859375px",
                    top: "57.0079305075067px",
                    width: "67.90673828125px",
                    height: "47.48017373123326px",
                    color: "rgb(208, 220, 251)",
                }}
            >
                KO
            </span>
            <span
                className="zoom test2"
                style={{
                    ...spanStyle,
                    fontSize: "14.664260780675605px",
                    lineHeight: "14.664260780675605px",
                    left: "284.418701171875px",
                    top: "98.5px",
                    width: "39.16259765625px",
                    height: 15,
                    color: "rgb(196, 241, 249)",
                }}
            >
                WISH
            </span>
            <span
                className="zoom test2"
                style={{
                    ...spanStyle,
                    fontSize: "1.171875px",
                    lineHeight: "1.171875px",
                    left: "711.221435546875px",
                    top: "503.03125px",
                    width: "2.55712890625px",
                    height: "1.171875px",
                    color: "#A0AEC0",
                }}
            >
                PYPL
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "47.48017373123326px",
                    lineHeight: "47.48017373123326px",
                    left: "51.546630859375px",
                    top: "304.00793050750667px",
                    width: "67.90673828125px",
                    height: "47.48017373123326px",
                    color: "#A0AEC0",
                }}
            >
                SQ
            </span>
            <span
                className="zoom test2"
                style={{
                    ...spanStyle,
                    fontSize: "28.41968562206996px",
                    lineHeight: "28.41968562206996px",
                    left: "1024.9345703125px",
                    top: "226.13212575117203px",
                    width: "59.130859375px",
                    height: "28.41968562206996px",
                    color: "#728FEA",
                }}
            >
                OXY
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "28.41968562206996px",
                    lineHeight: "28.41968562206996px",
                    left: "360.7138671875px",
                    top: "568.132125751172px",
                    width: "57.572265625px",
                    height: "28.41968562206996px",
                    color: "#728FEA",
                }}
            >
                ADA
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "14.664260780675605px",
                    lineHeight: "14.664260780675605px",
                    left: "855.24267578125px",
                    top: "79.5px",
                    width: "37.5146484375px",
                    height: 15,
                    color: "#A0AEC0",
                }}
            >
                TSLA
            </span>
            <span
                className="zoom test2"
                style={{
                    ...spanStyle,
                    fontSize: "1.171875px",
                    lineHeight: "1.171875px",
                    left: "540.138427734375px",
                    top: "66.03125px",
                    width: "2.72314453125px",
                    height: "1.171875px",
                    color: "rgb(170, 192, 254)",
                }}
            >
                SCVX
            </span>
            <span
                className="zoom test3"
                style={{
                    ...spanStyle,
                    fontSize: "1.171875px",
                    lineHeight: "1.171875px",
                    left: "768.45361328125px",
                    top: "104.03125px",
                    width: "2.0927734375px",
                    height: "1.171875px",
                    color: "#00A3C4",
                }}
            >
                TAIT
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "1.171875px",
                    lineHeight: "1.171875px",
                    left: "540.138427734375px",
                    top: "522.03125px",
                    width: "2.72314453125px",
                    height: "1.171875px",
                    color: "rgb(196, 241, 249)",
                }}
            >
                SEAH
            </span>
            <span
                className="zoom test2"
                style={{
                    ...spanStyle,
                    fontSize: "47.48017373123326px",
                    lineHeight: "47.48017373123326px",
                    left: "1002.279052734375px",
                    top: "437.00793050750667px",
                    width: "104.44189453125px",
                    height: "47.48017373123326px",
                    color: "#A0AEC0",
                }}
            >
                AMC
            </span>
            <span
                className="zoom test2"
                style={{
                    ...spanStyle,
                    fontSize: "5.770989437554294px",
                    lineHeight: "5.770989437554294px",
                    left: "660.6669921875px",
                    top: "7.1px",
                    width: "8.666015625px",
                    height: 6,
                    color: "rgb(144, 205, 244)",
                }}
            >
                RC
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "1.171875px",
                    lineHeight: "1.171875px",
                    left: "882.536865234375px",
                    top: "180.03125px",
                    width: "1.92626953125px",
                    height: "1.171875px",
                    color: "#00A3C4",
                }}
            >
                ATH
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "1.171875px",
                    lineHeight: "1.171875px",
                    left: "958.564453125px",
                    top: "351.03125px",
                    width: "1.87109375px",
                    height: "1.171875px",
                    color: "rgb(196, 241, 249)",
                }}
            >
                BAT
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "28.41968562206996px",
                    lineHeight: "28.41968562206996px",
                    left: 378,
                    top: "-1.8678742488279845px",
                    width: 42,
                    height: "28.41968562206996px",
                    color: "#A0AEC0",
                }}
            >
                MP
            </span>
            <span
                className="zoom test3"
                style={{
                    ...spanStyle,
                    fontSize: "5.770989437554294px",
                    lineHeight: "5.770989437554294px",
                    left: "957.4990234375px",
                    top: "330.1px",
                    width: "4.001953125px",
                    height: 6,
                    color: "rgb(190, 227, 248)",
                }}
            >
                B
            </span>
            <span
                className="zoom test2"
                style={{
                    ...spanStyle,
                    fontSize: "14.664260780675605px",
                    lineHeight: "14.664260780675605px",
                    left: "492.25px",
                    top: "3.5px",
                    width: "22.5px",
                    height: 15,
                    color: "rgb(208, 220, 251)",
                }}
            >
                AM
            </span>
            <span
                className="zoom test3"
                style={{
                    ...spanStyle,
                    fontSize: "5.770989437554294px",
                    lineHeight: "5.770989437554294px",
                    left: "165.8349609375px",
                    top: "330.1px",
                    width: "10.330078125px",
                    height: 6,
                    color: "#00A3C4",
                }}
            >
                ZIM
            </span>
            <span
                className="zoom test3"
                style={{
                    ...spanStyle,
                    fontSize: "1.171875px",
                    lineHeight: "1.171875px",
                    left: "958.861083984375px",
                    top: "313.03125px",
                    width: "1.27783203125px",
                    height: "1.171875px",
                    color: "#A0AEC0",
                }}
            >
                FB
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "5.770989437554294px",
                    lineHeight: "5.770989437554294px",
                    left: "620.66455078125px",
                    top: "7.1px",
                    width: "12.6708984375px",
                    height: 6,
                    color: "#A0AEC0",
                }}
            >
                PEG
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "14.664260780675605px",
                    lineHeight: "14.664260780675605px",
                    left: "129.580078125px",
                    top: "231.5px",
                    width: "25.83984375px",
                    height: 15,
                    color: "rgb(190, 227, 248)",
                }}
            >
                BIG
            </span>
            <span
                className="zoom test3"
                style={{
                    ...spanStyle,
                    fontSize: "5.770989437554294px",
                    lineHeight: "5.770989437554294px",
                    left: "235.4990234375px",
                    top: "273.1px",
                    width: "4.001953125px",
                    height: 6,
                    color: "rgb(208, 220, 251)",
                }}
            >
                K
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "1.171875px",
                    lineHeight: "1.171875px",
                    left: "369.5px",
                    top: "484.03125px",
                    width: 2,
                    height: "1.171875px",
                    color: "#A0AEC0",
                }}
            >
                ZRX
            </span>
            <span
                className="zoom test3"
                style={{
                    ...spanStyle,
                    fontSize: "1.171875px",
                    lineHeight: "1.171875px",
                    left: "901.41650390625px",
                    top: "446.03125px",
                    width: "2.1669921875px",
                    height: "1.171875px",
                    color: "rgb(208, 220, 251)",
                }}
            >
                CEO
            </span>
            <span
                className="zoom test2"
                style={{
                    ...spanStyle,
                    fontSize: "1.171875px",
                    lineHeight: "1.171875px",
                    left: "218.138916015625px",
                    top: "256.03125px",
                    width: "0.72216796875px",
                    height: "1.171875px",
                    color: "rgb(190, 227, 248)",
                }}
            >
                D
            </span>
            <span
                className="zoom test3"
                style={{
                    ...spanStyle,
                    fontSize: "28.41968562206996px",
                    lineHeight: "28.41968562206996px",
                    left: "113.7138671875px",
                    top: "397.132125751172px",
                    width: "57.572265625px",
                    height: "28.41968562206996px",
                    color: "#00A3C4",
                }}
            >
                BNB
            </span>
            <span
                className="zoom test2"
                style={{
                    ...spanStyle,
                    fontSize: "14.664260780675605px",
                    lineHeight: "14.664260780675605px",
                    left: "155.99267578125px",
                    top: "345.5px",
                    width: "30.0146484375px",
                    height: 15,
                    color: "#A0AEC0",
                }}
            >
                SOL
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "5.770989437554294px",
                    lineHeight: "5.770989437554294px",
                    left: "696.83154296875px",
                    top: "7.1px",
                    width: "12.3369140625px",
                    height: 6,
                    color: "#00A3C4",
                }}
            >
                XRP
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "47.48017373123326px",
                    lineHeight: "47.48017373123326px",
                    left: "1077.314208984375px",
                    top: "361.00793050750667px",
                    width: "125.37158203125px",
                    height: "47.48017373123326px",
                    color: "rgb(170, 192, 254)",
                }}
            >
                LUNA
            </span>
            <span
                className="zoom test2"
                style={{
                    ...spanStyle,
                    fontSize: "1.171875px",
                    lineHeight: "1.171875px",
                    left: "445.027587890625px",
                    top: "522.03125px",
                    width: "2.94482421875px",
                    height: "1.171875px",
                    color: "rgb(144, 205, 244)",
                }}
            >
                DOGE
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "5.770989437554294px",
                    lineHeight: "5.770989437554294px",
                    left: "620.66748046875px",
                    top: "596.1px",
                    width: "12.6650390625px",
                    height: 6,
                    color: "rgb(144, 205, 244)",
                }}
            >
                DOT
            </span>
            <span
                className="zoom test3"
                style={{
                    ...spanStyle,
                    fontSize: "28.41968562206996px",
                    lineHeight: "28.41968562206996px",
                    left: "829.212890625px",
                    top: "568.132125751172px",
                    width: "70.57421875px",
                    height: "28.41968562206996px",
                    color: "#A0AEC0",
                }}
            >
                AVAX
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "5.770989437554294px",
                    lineHeight: "5.770989437554294px",
                    left: "1017.33544921875px",
                    top: "406.1px",
                    width: "17.3291015625px",
                    height: 6,
                    color: "#A0AEC0",
                }}
            >
                MCMJ
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "28.41968562206996px",
                    lineHeight: "28.41968562206996px",
                    left: "74.94140625px",
                    top: "245.13212575117203px",
                    width: "59.1171875px",
                    height: "28.41968562206996px",
                    color: "rgb(208, 220, 251)",
                }}
            >
                CAN
            </span>
            <span
                className="zoom test2"
                style={{
                    ...spanStyle,
                    fontSize: "14.664260780675605px",
                    lineHeight: "14.664260780675605px",
                    left: "742.4951171875px",
                    top: "3.5px",
                    width: "35.009765625px",
                    height: 15,
                    color: "#728FEA",
                }}
            >
                SHIB
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "1.171875px",
                    lineHeight: "1.171875px",
                    left: "369.41650390625px",
                    top: "503.03125px",
                    width: "2.1669921875px",
                    height: "1.171875px",
                    color: "#A0AEC0",
                }}
            >
                DAO
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "1.171875px",
                    lineHeight: "1.171875px",
                    left: "768.49951171875px",
                    top: "522.03125px",
                    width: "2.0009765625px",
                    height: "1.171875px",
                    color: "#A0AEC0",
                }}
            >
                PSA
            </span>
            <span
                className="zoom test2"
                style={{
                    ...spanStyle,
                    fontSize: "5.770989437554294px",
                    lineHeight: "5.770989437554294px",
                    left: "580.99609375px",
                    top: "596.1px",
                    width: "16.0078125px",
                    height: 6,
                    color: "#A0AEC0",
                }}
            >
                BBBY
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "28.41968562206996px",
                    lineHeight: "28.41968562206996px",
                    left: "1044.8759765625px",
                    top: "169.13212575117203px",
                    width: "76.248046875px",
                    height: "28.41968562206996px",
                    color: "#728FEA",
                }}
            >
                ESSC
            </span>
            <span
                className="zoom test3"
                style={{
                    ...spanStyle,
                    fontSize: "28.41968562206996px",
                    lineHeight: "28.41968562206996px",
                    left: "284.0966796875px",
                    top: "-1.8678742488279845px",
                    width: "77.806640625px",
                    height: "28.41968562206996px",
                    color: "rgb(170, 192, 254)",
                }}
            >
                SAGE
            </span>
            <span
                className="zoom test2"
                style={{
                    ...spanStyle,
                    fontSize: "47.48017373123326px",
                    lineHeight: "47.48017373123326px",
                    left: "1021.279052734375px",
                    top: "95.0079305075067px",
                    width: "104.44189453125px",
                    height: "47.48017373123326px",
                    color: "#A0AEC0",
                }}
            >
                AMD
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "14.664260780675605px",
                    lineHeight: "14.664260780675605px",
                    left: "173.883056640625px",
                    top: "421.5px",
                    width: "32.23388671875px",
                    height: 15,
                    color: "#A0AEC0",
                }}
            >
                ATVI
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "1.171875px",
                    lineHeight: "1.171875px",
                    left: "369.83349609375px",
                    top: "85.03125px",
                    width: "1.3330078125px",
                    height: "1.171875px",
                    color: "#00A3C4",
                }}
            >
                CF
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "28.41968562206996px",
                    lineHeight: "28.41968562206996px",
                    left: "332.662109375px",
                    top: "549.132125751172px",
                    width: "18.67578125px",
                    height: "28.41968562206996px",
                    color: "rgb(208, 220, 251)",
                }}
            >
                V
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "1.171875px",
                    lineHeight: "1.171875px",
                    left: "996.8330078125px",
                    top: "275.03125px",
                    width: "1.333984375px",
                    height: "1.171875px",
                    color: "rgb(196, 241, 249)",
                }}
            >
                EV
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "47.48017373123326px",
                    lineHeight: "47.48017373123326px",
                    left: "1094.67431640625px",
                    top: "304.00793050750667px",
                    width: "109.6513671875px",
                    height: "47.48017373123326px",
                    color: "rgb(144, 205, 244)",
                }}
            >
                INTC
            </span>
            <span
                className="zoom test3"
                style={{
                    ...spanStyle,
                    fontSize: "28.41968562206996px",
                    lineHeight: "28.41968562206996px",
                    left: "168.3896484375px",
                    top: "55.13212575117201px",
                    width: "62.220703125px",
                    height: "28.41968562206996px",
                    color: "#A0AEC0",
                }}
            >
                OCC
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "47.48017373123326px",
                    lineHeight: "47.48017373123326px",
                    left: "108.32568359375px",
                    top: "494.00793050750667px",
                    width: "125.3486328125px",
                    height: "47.48017373123326px",
                    color: "#728FEA",
                }}
            >
                UPST
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "1.171875px",
                    lineHeight: "1.171875px",
                    left: "407.083251953125px",
                    top: "66.03125px",
                    width: "2.83349609375px",
                    height: "1.171875px",
                    color: "rgb(144, 205, 244)",
                }}
            >
                USDC
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "28.41968562206996px",
                    lineHeight: "28.41968562206996px",
                    left: "1094.7001953125px",
                    top: "245.13212575117203px",
                    width: "71.599609375px",
                    height: "28.41968562206996px",
                    color: "rgb(190, 227, 248)",
                }}
            >
                AAPL
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "5.770989437554294px",
                    lineHeight: "5.770989437554294px",
                    left: "542.9990234375px",
                    top: "596.1px",
                    width: "16.001953125px",
                    height: 6,
                    color: "#728FEA",
                }}
            >
                BREZ
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "1.171875px",
                    lineHeight: "1.171875px",
                    left: "274.41650390625px",
                    top: "446.03125px",
                    width: "2.1669921875px",
                    height: "1.171875px",
                    color: "rgb(208, 220, 251)",
                }}
            >
                GDP
            </span>
            <span
                className="zoom test2"
                style={{
                    ...spanStyle,
                    fontSize: "5.770989437554294px",
                    lineHeight: "5.770989437554294px",
                    left: "260.16845703125px",
                    top: "501.1px",
                    width: "11.6630859375px",
                    height: 6,
                    color: "#728FEA",
                }}
            >
                FCF
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "14.664260780675605px",
                    lineHeight: "14.664260780675605px",
                    left: "929.16259765625px",
                    top: "497.5px",
                    width: "41.6748046875px",
                    height: 15,
                    color: "#A0AEC0",
                }}
            >
                NEAR
            </span>
            <span
                className="zoom test2"
                style={{
                    ...spanStyle,
                    fontSize: "5.770989437554294px",
                    lineHeight: "5.770989437554294px",
                    left: "826.888671875px",
                    top: "558.1px",
                    width: "18.22265625px",
                    height: 6,
                    color: "rgb(170, 192, 254)",
                }}
            >
                MATIC
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "28.41968562206996px",
                    lineHeight: "28.41968562206996px",
                    left: "74.779296875px",
                    top: "207.13212575117203px",
                    width: "40.44140625px",
                    height: "28.41968562206996px",
                    color: "#A0AEC0",
                }}
            >
                CC
            </span>
            <span
                className="zoom test2"
                style={{
                    ...spanStyle,
                    fontSize: "47.48017373123326px",
                    lineHeight: "47.48017373123326px",
                    left: 903,
                    top: "0.007930507506696216px",
                    width: 94,
                    height: "47.48017373123326px",
                    color: "rgb(170, 192, 254)",
                }}
            >
                NET
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "5.770989437554294px",
                    lineHeight: "5.770989437554294px",
                    left: "450.052734375px",
                    top: "7.1px",
                    width: "11.89453125px",
                    height: 6,
                    color: "rgb(144, 205, 244)",
                }}
            >
                PAC
            </span>
            <span
                className="zoom test3"
                style={{
                    ...spanStyle,
                    fontSize: "47.48017373123326px",
                    lineHeight: "47.48017373123326px",
                    left: "1005.604736328125px",
                    top: "494.00793050750667px",
                    width: "135.79052734375px",
                    height: "47.48017373123326px",
                    color: "rgb(170, 192, 254)",
                }}
            >
                PUMP
            </span>
            <span
                className="zoom test3"
                style={{
                    ...spanStyle,
                    fontSize: "5.770989437554294px",
                    lineHeight: "5.770989437554294px",
                    left: "505.1630859375px",
                    top: "596.1px",
                    width: "15.673828125px",
                    height: 6,
                    color: "rgb(208, 220, 251)",
                }}
            >
                ROLL
            </span>
            <span
                className="zoom test2"
                style={{
                    ...spanStyle,
                    fontSize: "14.664260780675605px",
                    lineHeight: "14.664260780675605px",
                    left: "459.168701171875px",
                    top: "592.5px",
                    width: "31.66259765625px",
                    height: 15,
                    color: "#A0AEC0",
                }}
            >
                OUT
            </span>
            <span
                className="zoom test3"
                style={{
                    ...spanStyle,
                    fontSize: "1.171875px",
                    lineHeight: "1.171875px",
                    left: "977.101318359375px",
                    top: "370.03125px",
                    width: "2.79736328125px",
                    height: "1.171875px",
                    color: "rgb(190, 227, 248)",
                }}
            >
                ATOM
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "28.41968562206996px",
                    lineHeight: "28.41968562206996px",
                    left: "16.5517578125px",
                    top: "378.132125751172px",
                    width: "80.896484375px",
                    height: "28.41968562206996px",
                    color: "rgb(208, 220, 251)",
                }}
            >
                AMCX
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "28.41968562206996px",
                    lineHeight: "28.41968562206996px",
                    left: "246.8759765625px",
                    top: "568.132125751172px",
                    width: "76.248046875px",
                    height: "28.41968562206996px",
                    color: "#A0AEC0",
                }}
            >
                BHSE
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "1.171875px",
                    lineHeight: "1.171875px",
                    left: 218,
                    top: "389.03125px",
                    width: 1,
                    height: "1.171875px",
                    color: "rgb(196, 241, 249)",
                }}
            >
                UI
            </span>
            <span
                className="zoom test3"
                style={{
                    ...spanStyle,
                    fontSize: "47.48017373123326px",
                    lineHeight: "47.48017373123326px",
                    left: "72.220947265625px",
                    top: "95.0079305075067px",
                    width: "83.55810546875px",
                    height: "47.48017373123326px",
                    color: "rgb(196, 241, 249)",
                }}
            >
                NIO
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "14.664260780675605px",
                    lineHeight: "14.664260780675605px",
                    left: "780.919921875px",
                    top: "3.5px",
                    width: "34.16015625px",
                    height: 15,
                    color: "#A0AEC0",
                }}
            >
                CMC
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "1.171875px",
                    lineHeight: "1.171875px",
                    left: "616.77783203125px",
                    top: "28.03125px",
                    width: "1.4443359375px",
                    height: "1.171875px",
                    color: "#A0AEC0",
                }}
            >
                RH
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "14.664260780675605px",
                    lineHeight: "14.664260780675605px",
                    left: "992.003662109375px",
                    top: "98.5px",
                    width: "29.99267578125px",
                    height: 15,
                    color: "rgb(144, 205, 244)",
                }}
            >
                TGT
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "5.770989437554294px",
                    lineHeight: "5.770989437554294px",
                    left: "105.66650390625px",
                    top: "292.1px",
                    width: "16.6669921875px",
                    height: 6,
                    color: "#A0AEC0",
                }}
            >
                ZNGA
            </span>
            <span
                className="zoom test2"
                style={{
                    ...spanStyle,
                    fontSize: "5.770989437554294px",
                    lineHeight: "5.770989437554294px",
                    left: "1014.16650390625px",
                    top: "254.1px",
                    width: "4.6669921875px",
                    height: 6,
                    color: "rgb(170, 192, 254)",
                }}
            >
                G
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "28.41968562206996px",
                    lineHeight: "28.41968562206996px",
                    left: "1100.779296875px",
                    top: "207.13212575117203px",
                    width: "40.44140625px",
                    height: "28.41968562206996px",
                    color: "rgb(196, 241, 249)",
                }}
            >
                NU
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "14.664260780675605px",
                    lineHeight: "14.664260780675605px",
                    left: "1041.9248046875px",
                    top: "421.5px",
                    width: "44.150390625px",
                    height: 15,
                    color: "#A0AEC0",
                }}
            >
                TTWO
            </span>
            <span
                className="zoom test2"
                style={{
                    ...spanStyle,
                    fontSize: "47.48017373123326px",
                    lineHeight: "47.48017373123326px",
                    left: "147.279052734375px",
                    top: "0.007930507506696216px",
                    width: "104.44189453125px",
                    height: "47.48017373123326px",
                    color: "rgb(208, 220, 251)",
                }}
            >
                CRO
            </span>
            <span
                className="zoom test2"
                style={{
                    ...spanStyle,
                    fontSize: "28.41968562206996px",
                    lineHeight: "28.41968562206996px",
                    left: "28.6357421875px",
                    top: "416.132125751172px",
                    width: "75.728515625px",
                    height: "28.41968562206996px",
                    color: "#00A3C4",
                }}
            >
                HUYA
            </span>
            <span
                className="zoom test3"
                style={{
                    ...spanStyle,
                    fontSize: "28.41968562206996px",
                    lineHeight: "28.41968562206996px",
                    left: "911.103515625px",
                    top: "568.132125751172px",
                    width: "77.79296875px",
                    height: "28.41968562206996px",
                    color: "rgb(208, 220, 251)",
                }}
            >
                BUSD
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "1.171875px",
                    lineHeight: "1.171875px",
                    left: "673.83349609375px",
                    top: "28.03125px",
                    width: "1.3330078125px",
                    height: "1.171875px",
                    color: "rgb(190, 227, 248)",
                }}
            >
                TH
            </span>
            <span
                className="zoom test3"
                style={{
                    ...spanStyle,
                    fontSize: "14.664260780675605px",
                    lineHeight: "14.664260780675605px",
                    left: "817.66748046875px",
                    top: "3.5px",
                    width: "36.6650390625px",
                    height: 15,
                    color: "rgb(190, 227, 248)",
                }}
            >
                CURI
            </span>
            <span
                className="zoom test3"
                style={{
                    ...spanStyle,
                    fontSize: "14.664260780675605px",
                    lineHeight: "14.664260780675605px",
                    left: "1060.99755859375px",
                    top: "155.5px",
                    width: "25.0048828125px",
                    height: 15,
                    color: "rgb(196, 241, 249)",
                }}
            >
                ICP
            </span>
            <span
                className="zoom test3"
                style={{
                    ...spanStyle,
                    fontSize: "5.770989437554294px",
                    lineHeight: "5.770989437554294px",
                    left: "1075.21728515625px",
                    top: "216.1px",
                    width: "15.5654296875px",
                    height: 6,
                    color: "rgb(196, 241, 249)",
                }}
            >
                AAVE
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "1.171875px",
                    lineHeight: "1.171875px",
                    left: "920.66650390625px",
                    top: "123.03125px",
                    width: "1.6669921875px",
                    height: "1.171875px",
                    color: "#A0AEC0",
                }}
            >
                IRS
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "47.48017373123326px",
                    lineHeight: "47.48017373123326px",
                    left: "997.70361328125px",
                    top: "38.0079305075067px",
                    width: "56.5927734375px",
                    height: "47.48017373123326px",
                    color: "#A0AEC0",
                }}
            >
                TA
            </span>
            <span
                className="zoom test2"
                style={{
                    ...spanStyle,
                    fontSize: "14.664260780675605px",
                    lineHeight: "14.664260780675605px",
                    left: "531.4951171875px",
                    top: "554.5px",
                    width: "20.009765625px",
                    height: 15,
                    color: "rgb(196, 241, 249)",
                }}
            >
                PS
            </span>
            <span
                className="zoom test2"
                style={{
                    ...spanStyle,
                    fontSize: "5.770989437554294px",
                    lineHeight: "5.770989437554294px",
                    left: "1096.439453125px",
                    top: "292.1px",
                    width: "11.12109375px",
                    height: 6,
                    color: "rgb(144, 205, 244)",
                }}
            >
                AVA
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "14.664260780675605px",
                    lineHeight: "14.664260780675605px",
                    left: "72.166259765625px",
                    top: "364.5px",
                    width: "26.66748046875px",
                    height: 15,
                    color: "#728FEA",
                }}
            >
                IGC
            </span>
            <span
                className="zoom test3"
                style={{
                    ...spanStyle,
                    fontSize: "14.664260780675605px",
                    lineHeight: "14.664260780675605px",
                    left: "436.0849609375px",
                    top: "592.5px",
                    width: "20.830078125px",
                    height: 15,
                    color: "#728FEA",
                }}
            >
                TG
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "28.41968562206996px",
                    lineHeight: "28.41968562206996px",
                    left: "-0.1240234375px",
                    top: "264.132125751172px",
                    width: "76.248046875px",
                    height: "28.41968562206996px",
                    color: "#00A3C4",
                }}
            >
                SBUX
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "47.48017373123326px",
                    lineHeight: "47.48017373123326px",
                    left: "1150.57568359375px",
                    top: "190.0079305075067px",
                    width: "54.8486328125px",
                    height: "47.48017373123326px",
                    color: "rgb(170, 192, 254)",
                }}
            >
                SJ
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "28.41968562206996px",
                    lineHeight: "28.41968562206996px",
                    left: "170.734375px",
                    top: "549.132125751172px",
                    width: "57.53125px",
                    height: "28.41968562206996px",
                    color: "#A0AEC0",
                }}
            >
                FTM
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "47.48017373123326px",
                    lineHeight: "47.48017373123326px",
                    left: "1001.935791015625px",
                    top: "551.0079305075067px",
                    width: "86.12841796875px",
                    height: "47.48017373123326px",
                    color: "rgb(144, 205, 244)",
                }}
            >
                FTT
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "47.48017373123326px",
                    lineHeight: "47.48017373123326px",
                    left: "1135.854736328125px",
                    top: "418.00793050750667px",
                    width: "65.29052734375px",
                    height: "47.48017373123326px",
                    color: "#A0AEC0",
                }}
            >
                AR
            </span>
            <span
                className="zoom test3"
                style={{
                    ...spanStyle,
                    fontSize: "14.664260780675605px",
                    lineHeight: "14.664260780675605px",
                    left: "856.07763671875px",
                    top: "3.5px",
                    width: "35.8447265625px",
                    height: 15,
                    color: "#A0AEC0",
                }}
            >
                BBIG
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "28.41968562206996px",
                    lineHeight: "28.41968562206996px",
                    left: "75.0966796875px",
                    top: "55.13212575117201px",
                    width: "77.806640625px",
                    height: "28.41968562206996px",
                    color: "#A0AEC0",
                }}
            >
                SOLO
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "47.48017373123326px",
                    lineHeight: "47.48017373123326px",
                    left: 1074,
                    top: "38.0079305075067px",
                    width: 94,
                    height: "47.48017373123326px",
                    color: "#A0AEC0",
                }}
            >
                ETN
            </span>
            <span
                className="zoom test3"
                style={{
                    ...spanStyle,
                    fontSize: "28.41968562206996px",
                    lineHeight: "28.41968562206996px",
                    left: "1136.4482421875px",
                    top: "150.13212575117203px",
                    width: "45.103515625px",
                    height: "28.41968562206996px",
                    color: "#A0AEC0",
                }}
            >
                GM
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "14.664260780675605px",
                    lineHeight: "14.664260780675605px",
                    left: "1122.916259765625px",
                    top: "288.5px",
                    width: "34.16748046875px",
                    height: 15,
                    color: "rgb(208, 220, 251)",
                }}
            >
                BMO
            </span>
            <span
                className="zoom test2"
                style={{
                    ...spanStyle,
                    fontSize: "47.48017373123326px",
                    lineHeight: "47.48017373123326px",
                    left: "-2.1162109375px",
                    top: "456.00793050750667px",
                    width: "99.232421875px",
                    height: "47.48017373123326px",
                    color: "#A0AEC0",
                }}
            >
                NYC
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "1.171875px",
                    lineHeight: "1.171875px",
                    left: "331.33349609375px",
                    top: "522.03125px",
                    width: "2.3330078125px",
                    height: "1.171875px",
                    color: "rgb(190, 227, 248)",
                }}
            >
                NEW
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "28.41968562206996px",
                    lineHeight: "28.41968562206996px",
                    left: "94.1103515625px",
                    top: "549.132125751172px",
                    width: "77.779296875px",
                    height: "28.41968562206996px",
                    color: "rgb(190, 227, 248)",
                }}
            >
                TEAM
            </span>
            <span
                className="zoom test3"
                style={{
                    ...spanStyle,
                    fontSize: "5.770989437554294px",
                    lineHeight: "5.770989437554294px",
                    left: "367.3330078125px",
                    top: "45.1px",
                    width: "6.333984375px",
                    height: 6,
                    color: "#728FEA",
                }}
            >
                OI
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "1.171875px",
                    lineHeight: "1.171875px",
                    left: "312.11083984375px",
                    top: "85.03125px",
                    width: "2.7783203125px",
                    height: "1.171875px",
                    color: "#A0AEC0",
                }}
            >
                VCRA
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "28.41968562206996px",
                    lineHeight: "28.41968562206996px",
                    left: "1041.779296875px",
                    top: "-1.8678742488279845px",
                    width: "82.44140625px",
                    height: "28.41968562206996px",
                    color: "rgb(208, 220, 251)",
                }}
            >
                DOCU
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "5.770989437554294px",
                    lineHeight: "5.770989437554294px",
                    left: "48.5009765625px",
                    top: "235.1px",
                    width: "16.998046875px",
                    height: 6,
                    color: "rgb(196, 241, 249)",
                }}
            >
                AMZN
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "14.664260780675605px",
                    lineHeight: "14.664260780675605px",
                    left: "1138.169921875px",
                    top: "136.5px",
                    width: "41.66015625px",
                    height: 15,
                    color: "rgb(208, 220, 251)",
                }}
            >
                TURN
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "14.664260780675605px",
                    lineHeight: "14.664260780675605px",
                    left: "16.83251953125px",
                    top: "250.5px",
                    width: "23.3349609375px",
                    height: 15,
                    color: "#A0AEC0",
                }}
            >
                BTI
            </span>
            <span
                className="zoom test3"
                style={{
                    ...spanStyle,
                    fontSize: "5.770989437554294px",
                    lineHeight: "5.770989437554294px",
                    left: "1116.998046875px",
                    top: "425.1px",
                    width: "8.00390625px",
                    height: 6,
                    color: "#A0AEC0",
                }}
            >
                EA
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "1.171875px",
                    lineHeight: "1.171875px",
                    left: "901.453369140625px",
                    top: "85.03125px",
                    width: "2.09326171875px",
                    height: "1.171875px",
                    color: "#A0AEC0",
                }}
            >
                CTO
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "14.664260780675605px",
                    lineHeight: "14.664260780675605px",
                    left: "186.91748046875px",
                    top: "592.5px",
                    width: "44.1650390625px",
                    height: 15,
                    color: "rgb(208, 220, 251)",
                }}
            >
                MRNA
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "28.41968562206996px",
                    lineHeight: "28.41968562206996px",
                    left: "56.7138671875px",
                    top: "17.132125751172016px",
                    width: "57.572265625px",
                    height: "28.41968562206996px",
                    color: "#A0AEC0",
                }}
            >
                ANY
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "47.48017373123326px",
                    lineHeight: "47.48017373123326px",
                    left: "13.546630859375px",
                    top: "513.0079305075067px",
                    width: "67.90673828125px",
                    height: "47.48017373123326px",
                    color: "rgb(190, 227, 248)",
                }}
            >
                GS
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "14.664260780675605px",
                    lineHeight: "14.664260780675605px",
                    left: "23.823974609375px",
                    top: "212.5px",
                    width: "28.35205078125px",
                    height: 15,
                    color: "rgb(170, 192, 254)",
                }}
            >
                ELA
            </span>
            <span
                className="zoom test3"
                style={{
                    ...spanStyle,
                    fontSize: "28.41968562206996px",
                    lineHeight: "28.41968562206996px",
                    left: "1119.1484375px",
                    top: "549.132125751172px",
                    width: "60.703125px",
                    height: "28.41968562206996px",
                    color: "#728FEA",
                }}
            >
                API3
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "5.770989437554294px",
                    lineHeight: "5.770989437554294px",
                    left: "1000.83154296875px",
                    top: "26.1px",
                    width: "12.3369140625px",
                    height: 6,
                    color: "#A0AEC0",
                }}
            >
                MLP
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "47.48017373123326px",
                    lineHeight: "47.48017373123326px",
                    left: "15.430419921875px",
                    top: "152.0079305075067px",
                    width: "26.13916015625px",
                    height: "47.48017373123326px",
                    color: "#A0AEC0",
                }}
            >
                L
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "1.171875px",
                    lineHeight: "1.171875px",
                    left: "1034.24951171875px",
                    top: "313.03125px",
                    width: "2.5009765625px",
                    height: "1.171875px",
                    color: "rgb(144, 205, 244)",
                }}
            >
                SELF
            </span>
            <span
                className="zoom test2"
                style={{
                    ...spanStyle,
                    fontSize: "28.41968562206996px",
                    lineHeight: "28.41968562206996px",
                    left: "29.927734375px",
                    top: "568.132125751172px",
                    width: "73.14453125px",
                    height: "28.41968562206996px",
                    color: "#A0AEC0",
                }}
            >
                REAL
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "47.48017373123326px",
                    lineHeight: "47.48017373123326px",
                    left: "1137.1513671875px",
                    top: "475.00793050750667px",
                    width: "62.697265625px",
                    height: "47.48017373123326px",
                    color: "#00A3C4",
                }}
            >
                BX
            </span>
            <span
                className="zoom test2"
                style={{
                    ...spanStyle,
                    fontSize: "5.770989437554294px",
                    lineHeight: "5.770989437554294px",
                    left: "1169.6650390625px",
                    top: "292.1px",
                    width: "16.669921875px",
                    height: 6,
                    color: "rgb(196, 241, 249)",
                }}
            >
                CPSR
            </span>
            <span
                className="zoom test1"
                style={{
                    ...spanStyle,
                    fontSize: "14.664260780675605px",
                    lineHeight: "14.664260780675605px",
                    left: "17.99755859375px",
                    top: "364.5px",
                    width: "40.0048828125px",
                    height: 15,
                    color: "rgb(208, 220, 251)",
                }}
            >
                FREE
            </span>
            <span
                className="zoom test4"
                style={{
                    ...spanStyle,
                    fontSize: "5.770989437554294px",
                    lineHeight: "5.770989437554294px",
                    left: "10.99609375px",
                    top: "330.1px",
                    width: "16.0078125px",
                    height: 6,
                    color: "#A0AEC0",
                }}
            >
                BABA
            </span>
        </div>
    );
}
