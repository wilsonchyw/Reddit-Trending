//import "custom.css";
import React, { useEffect } from 'react';

export default function Canvas() {
    useEffect(() => {
        async function typeTopic() {
            const sleep = async () => new Promise(resolve => setTimeout(resolve, 100));
            const text = 'Reddit Trending';
            const el = document.getElementById('topic');
            for (let s of text) {
                el.innerHTML += s;
                await sleep();
            }
        }
        typeTopic();
    }, []);
    const spanStyle = {
        position: 'absolute',
        display: 'block',
        fontStyle: 'normal',
        fontVariantCaps: 'normal',
        fontWeight: 'normal',
        fontStretch: 'normal',
        whiteSpace: 'nowrap',
        fontFamily: 'sans-serif'
    };
    return (
        <div
            id="html-canvas"
            className="canvas"
            style={{ width: '1200px', height: '600px', backgroundColor: 'rgba(255, 255, 255, 0,0.5)', position: 'relative' }}
        >
            <span
                className="main-tag mx-auto"
                id="topic"
                style={{
                    position: 'inherit',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: 'min(10vw, 130px)',
                    lineHeight: '139.955px',
                    top: '238.5px',
                    height: '140px',
                    color: 'white',
                    textAlign:"center"
                }}
            >
            </span>
            <span
                className="zoom test2"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '22.7358px',
                    lineHeight: '28.4197px',
                    left: '561px',
                    top: '359.132px',
                    width: '56px',
                    height: '28.4197px',
                    color: 'rgba(144, 205, 244,0.5)'
                }}
            >
                BTC
            </span>
            <span
                className="zoom test1"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '0.937504px',
                    lineHeight: '1.17188px',
                    left: '596.999px',
                    top: '294.031px',
                    width: '3.00146px',
                    height: '1.17188px',
                    color: 'rgba(141, 173, 179,0.5)'
                }}
            >
                Bitcoin
            </span>
            <span
                className="zoom test4"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '37.9842px',
                    lineHeight: '47.4802px',
                    left: '569.901px',
                    top: '190.008px',
                    width: '133.197px',
                    height: '47.4802px',
                    color: 'rgba(114, 143, 234,0.5)'
                }}
            >
                ROSE
            </span>
            <span
                className="zoom test3"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '22.7358px',
                    lineHeight: '28.4197px',
                    left: '530px',
                    top: '207.132px',
                    width: '42px',
                    height: '28.4197px',
                    color: 'rgba(160, 174, 192,0.5)'
                }}
            >
                ON
            </span>
            <span
                className="zoom test4"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '22.7358px',
                    lineHeight: '28.4197px',
                    left: '645.876px',
                    top: '359.132px',
                    width: '76.248px',
                    height: '28.4197px',
                    color: 'rgba(208, 220, 251,0.5)'
                }}
            >
                BENE
            </span>
            <span
                className="zoom test2"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '37.9842px',
                    lineHeight: '47.4802px',
                    left: '466.942px',
                    top: '361.008px',
                    width: '73.1162px',
                    height: '47.4802px',
                    color: 'rgba(170, 192, 254,0.5)'
                }}
            >
                GO
            </span>
            <span
                className="zoom test2"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '0.937504px',
                    lineHeight: '1.17188px',
                    left: '597.778px',
                    top: '313.031px',
                    width: '1.44434px',
                    height: '1.17188px',
                    color: 'rgba(190, 227, 248,0.5)'
                }}
            >
                DD
            </span>
            <span
                className="zoom test1"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '4.61679px',
                    lineHeight: '5.77099px',
                    left: '639.167px',
                    top: '254.1px',
                    width: '13.667px',
                    height: '6px',
                    color: 'rgba(208, 220, 251,0.5)'
                }}
            >
                GME
            </span>
            <span
                className="zoom test1"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '4.61679px',
                    lineHeight: '5.77099px',
                    left: '523.665px',
                    top: '311.1px',
                    width: '16.6699px',
                    height: '6px',
                    color: 'rgba(141, 173, 179,0.5)'
                }}
            >
                NVDA
            </span>
            <span
                className="zoom test3"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '37.9842px',
                    lineHeight: '47.4802px',
                    left: '582.041px',
                    top: '399.008px',
                    width: '127.919px',
                    height: '47.4802px',
                    color: 'rgba(141, 173, 179,0.5)'
                }}
            >
                MSFT
            </span>
            <span
                className="zoom test2"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '0.937504px',
                    lineHeight: '1.17188px',
                    left: '540.722px',
                    top: '294.031px',
                    width: '1.55518px',
                    height: '1.17188px',
                    color: 'rgba(170, 192, 254,0.5)'
                }}
            >
                MC
            </span>
            <span
                className="zoom test2"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '11.7314px',
                    lineHeight: '14.6643px',
                    left: '593.919px',
                    top: '326.5px',
                    width: '9.1626px',
                    height: '15px',
                    color: 'rgba(0, 163, 196,0.5)'
                }}
            >
                F
            </span>
            <span
                className="zoom test4"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '0.937504px',
                    lineHeight: '1.17188px',
                    left: '540.259px',
                    top: '332.031px',
                    width: '2.48242px',
                    height: '1.17188px',
                    color: 'rgba(190, 227, 248,0.5)'
                }}
            >
                PLTR
            </span>
            <span
                className="zoom test3"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '22.7358px',
                    lineHeight: '28.4197px',
                    left: '713.786px',
                    top: '226.132px',
                    width: '54.4277px',
                    height: '28.4197px',
                    color: 'rgba(208, 220, 251,0.5)'
                }}
            >
                NFT
            </span>
            <span
                className="zoom test2"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '11.7314px',
                    lineHeight: '14.6643px',
                    left: '668.996px',
                    top: '250.5px',
                    width: '30.0073px',
                    height: '15px',
                    color: 'rgba(170, 192, 254,0.5)'
                }}
            >
                LRC
            </span>
            <span
                className="zoom test4"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '11.7314px',
                    lineHeight: '14.6643px',
                    left: '496.748px',
                    top: '231.5px',
                    width: '32.5049px',
                    height: '15px',
                    color: 'rgba(190, 227, 248,0.5)'
                }}
            >
                ONE
            </span>
            <span
                className="zoom test2"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '37.9842px',
                    lineHeight: '47.4802px',
                    left: '487.25px',
                    top: '152.008px',
                    width: '70.5px',
                    height: '47.4802px',
                    color: 'rgba(160, 174, 192,0.5)'
                }}
            >
                PM
            </span>
            <span
                className="zoom test4"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '0.937504px',
                    lineHeight: '1.17188px',
                    left: '597.805px',
                    top: '351.031px',
                    width: '1.38916px',
                    height: '1.17188px',
                    color: 'rgba(141, 173, 179,0.5)'
                }}
            >
                UK
            </span>
            <span
                className="zoom test2"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '37.9842px',
                    lineHeight: '47.4802px',
                    left: '580px',
                    top: '133.008px',
                    width: '94px',
                    height: '47.4802px',
                    color: 'rgba(160, 174, 192,0.5)'
                }}
            >
                ETH
            </span>
            <span
                className="zoom test3"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '4.61679px',
                    lineHeight: '5.77099px',
                    left: '488px',
                    top: '216.1px',
                    width: '12px',
                    height: '6px',
                    color: 'rgba(190, 227, 248,0.5)'
                }}
            >
                DPZ
            </span>
            <span
                className="zoom test2"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '4.61679px',
                    lineHeight: '5.77099px',
                    left: '466.501px',
                    top: '235.1px',
                    width: '16.998px',
                    height: '6px',
                    color: 'rgba(160, 174, 192,0.5)'
                }}
            >
                FORD
            </span>
            <span
                className="zoom test4"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '37.9842px',
                    lineHeight: '47.4802px',
                    left: '716.547px',
                    top: '171.008px',
                    width: '67.9067px',
                    height: '47.4802px',
                    color: 'rgba(190, 227, 248,0.5)'
                }}
            >
                KO
            </span>
            <span
                className="zoom test2"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '11.7314px',
                    lineHeight: '14.6643px',
                    left: '740.419px',
                    top: '364.5px',
                    width: '39.1626px',
                    height: '15px',
                    color: 'rgba(141, 173, 179,0.5)'
                }}
            >
                WISH
            </span>
            <span
                className="zoom test2"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '0.937504px',
                    lineHeight: '1.17188px',
                    left: '521.221px',
                    top: '332.031px',
                    width: '2.55713px',
                    height: '1.17188px',
                    color: 'rgba(170, 192, 254,0.5)'
                }}
            >
                PYPL
            </span>
            <span
                className="zoom test4"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '37.9842px',
                    lineHeight: '47.4802px',
                    left: '374.547px',
                    top: '190.008px',
                    width: '67.9067px',
                    height: '47.4802px',
                    color: 'rgba(141, 173, 179,0.5)'
                }}
            >
                SQ
            </span>
            <span
                className="zoom test3"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '22.7358px',
                    lineHeight: '28.4197px',
                    left: '473.935px',
                    top: '416.132px',
                    width: '59.1309px',
                    height: '28.4197px',
                    color: 'rgba(114, 143, 234,0.5)'
                }}
            >
                OXY
            </span>
            <span
                className="zoom test4"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '22.7358px',
                    lineHeight: '28.4197px',
                    left: '398.714px',
                    top: '359.132px',
                    width: '57.5723px',
                    height: '28.4197px',
                    color: 'rgba(114, 143, 234,0.5)'
                }}
            >
                ADA
            </span>
            <span
                className="zoom test1"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '11.7314px',
                    lineHeight: '14.6643px',
                    left: '532.243px',
                    top: '402.5px',
                    width: '37.5146px',
                    height: '15px',
                    color: 'rgba(160, 174, 192,0.5)'
                }}
            >
                TSLA
            </span>
            <span
                className="zoom test1"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '0.937504px',
                    lineHeight: '1.17188px',
                    left: '540.138px',
                    top: '351.031px',
                    width: '2.72314px',
                    height: '1.17188px',
                    color: 'rgba(208, 220, 251,0.5)'
                }}
            >
                SCVX
            </span>
            <span
                className="zoom test3"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '0.937504px',
                    lineHeight: '1.17188px',
                    left: '635.454px',
                    top: '370.031px',
                    width: '2.09277px',
                    height: '1.17188px',
                    color: 'rgba(141, 173, 179,0.5)'
                }}
            >
                TAIT
            </span>
            <span
                className="zoom test1"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '0.937504px',
                    lineHeight: '1.17188px',
                    left: '635.138px',
                    top: '389.031px',
                    width: '2.72314px',
                    height: '1.17188px',
                    color: 'rgba(208, 220, 251,0.5)'
                }}
            >
                SEAH
            </span>
            <span
                className="zoom test2"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '37.9842px',
                    lineHeight: '47.4802px',
                    left: '717.279px',
                    top: '399.008px',
                    width: '104.442px',
                    height: '47.4802px',
                    color: 'rgba(160, 174, 192,0.5)'
                }}
            >
                AMC
            </span>
            <span
                className="zoom test4"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '4.61679px',
                    lineHeight: '5.77099px',
                    left: '736.667px',
                    top: '387.1px',
                    width: '8.66602px',
                    height: '6px',
                    color: 'rgba(141, 173, 179,0.5)'
                }}
            >
                RC
            </span>
            <span
                className="zoom test3"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '0.937504px',
                    lineHeight: '1.17188px',
                    left: '768.537px',
                    top: '313.031px',
                    width: '1.92627px',
                    height: '1.17188px',
                    color: 'rgba(208, 220, 251,0.5)'
                }}
            >
                ATH
            </span>
            <span
                className="zoom test1"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '0.937504px',
                    lineHeight: '1.17188px',
                    left: '464.564px',
                    top: '218.031px',
                    width: '1.87109px',
                    height: '1.17188px',
                    color: 'rgba(160, 174, 192,0.5)'
                }}
            >
                BAT
            </span>
            <span
                className="zoom test1"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '22.7358px',
                    lineHeight: '28.4197px',
                    left: '796px',
                    top: '226.132px',
                    width: '42px',
                    height: '28.4197px',
                    color: 'rgba(208, 220, 251,0.5)'
                }}
            >
                MP
            </span>
            <span
                className="zoom test2"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '4.61679px',
                    lineHeight: '5.77099px',
                    left: '767.499px',
                    top: '330.1px',
                    width: '4.00195px',
                    height: '6px',
                    color: 'rgba(160, 174, 192,0.5)'
                }}
            >
                B
            </span>
            <span
                className="zoom test2"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '11.7314px',
                    lineHeight: '14.6643px',
                    left: '435.25px',
                    top: '174.5px',
                    width: '22.5px',
                    height: '15px',
                    color: 'rgba(144, 205, 244,0.5)'
                }}
            >
                AM
            </span>
            <span
                className="zoom test3"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '4.61679px',
                    lineHeight: '5.77099px',
                    left: '393.835px',
                    top: '254.1px',
                    width: '10.3301px',
                    height: '6px',
                    color: 'rgba(114, 143, 234,0.5)'
                }}
            >
                ZIM
            </span>
            <span
                className="zoom test1"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '0.937504px',
                    lineHeight: '1.17188px',
                    left: '464.861px',
                    top: '199.031px',
                    width: '1.27783px',
                    height: '1.17188px',
                    color: 'rgba(170, 192, 254,0.5)'
                }}
            >
                FB
            </span>
            <span
                className="zoom test2"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '4.61679px',
                    lineHeight: '5.77099px',
                    left: '791.665px',
                    top: '216.1px',
                    width: '12.6709px',
                    height: '6px',
                    color: 'rgba(144, 205, 244,0.5)'
                }}
            >
                PEG
            </span>
            <span
                className="zoom test1"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '11.7314px',
                    lineHeight: '14.6643px',
                    left: '528.58px',
                    top: '136.5px',
                    width: '25.8398px',
                    height: '15px',
                    color: 'rgba(208, 220, 251,0.5)'
                }}
            >
                BIG
            </span>
            <span
                className="zoom test1"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '4.61679px',
                    lineHeight: '5.77099px',
                    left: '767.499px',
                    top: '349.1px',
                    width: '4.00195px',
                    height: '6px',
                    color: 'rgba(170, 192, 254,0.5)'
                }}
            >
                K
            </span>
            <span
                className="zoom test3"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '0.937504px',
                    lineHeight: '1.17188px',
                    left: '692.5px',
                    top: '180.031px',
                    width: '2px',
                    height: '1.17188px',
                    color: 'rgba(141, 173, 179,0.5)'
                }}
            >
                ZRX
            </span>
            <span
                className="zoom test1"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '0.937504px',
                    lineHeight: '1.17188px',
                    left: '806.417px',
                    top: '275.031px',
                    width: '2.16699px',
                    height: '1.17188px',
                    color: 'rgba(160, 174, 192,0.5)'
                }}
            >
                CEO
            </span>
            <span
                className="zoom test1"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '0.937504px',
                    lineHeight: '1.17188px',
                    left: '560.139px',
                    top: '427.031px',
                    width: '0.722168px',
                    height: '1.17188px',
                    color: 'rgba(160, 174, 192,0.5)'
                }}
            >
                D
            </span>
            <span
                className="zoom test2"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '22.7358px',
                    lineHeight: '28.4197px',
                    left: '797.714px',
                    top: '359.132px',
                    width: '57.5723px',
                    height: '28.4197px',
                    color: 'rgba(114, 143, 234,0.5)'
                }}
            >
                BNB
            </span>
            <span
                className="zoom test1"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '11.7314px',
                    lineHeight: '14.6643px',
                    left: '535.993px',
                    top: '440.5px',
                    width: '30.0146px',
                    height: '15px',
                    color: 'rgba(208, 220, 251,0.5)'
                }}
            >
                SOL
            </span>
            <span
                className="zoom test3"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '4.61679px',
                    lineHeight: '5.77099px',
                    left: '430.832px',
                    top: '406.1px',
                    width: '12.3369px',
                    height: '6px',
                    color: 'rgba(208, 220, 251,0.5)'
                }}
            >
                XRP
            </span>
            <span
                className="zoom test1"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '37.9842px',
                    lineHeight: '47.4802px',
                    left: '564.314px',
                    top: '456.008px',
                    width: '125.372px',
                    height: '47.4802px',
                    color: 'rgba(160, 174, 192,0.5)'
                }}
            >
                LUNA
            </span>
            <span
                className="zoom test3"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '0.937504px',
                    lineHeight: '1.17188px',
                    left: '388.028px',
                    top: '275.031px',
                    width: '2.94482px',
                    height: '1.17188px',
                    color: 'rgba(160, 174, 192,0.5)'
                }}
            >
                DOGE
            </span>
            <span
                className="zoom test1"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '4.61679px',
                    lineHeight: '5.77099px',
                    left: '772.667px',
                    top: '387.1px',
                    width: '12.665px',
                    height: '6px',
                    color: 'rgba(141, 173, 179,0.5)'
                }}
            >
                DOT
            </span>
            <span
                className="zoom test1"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '22.7358px',
                    lineHeight: '28.4197px',
                    left: '696.213px',
                    top: '131.132px',
                    width: '70.5742px',
                    height: '28.4197px',
                    color: 'rgba(144, 205, 244,0.5)'
                }}
            >
                AVAX
            </span>
            <span
                className="zoom test3"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '4.61679px',
                    lineHeight: '5.77099px',
                    left: '485.335px',
                    top: '140.1px',
                    width: '17.3291px',
                    height: '6px',
                    color: 'rgba(208, 220, 251,0.5)'
                }}
            >
                MCMJ
            </span>
            <span
                className="zoom test4"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '22.7358px',
                    lineHeight: '28.4197px',
                    left: '492.941px',
                    top: '454.132px',
                    width: '59.1172px',
                    height: '28.4197px',
                    color: 'rgba(114, 143, 234,0.5)'
                }}
            >
                CAN
            </span>
            <span
                className="zoom test1"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '11.7314px',
                    lineHeight: '14.6643px',
                    left: '419.495px',
                    top: '421.5px',
                    width: '35.0098px',
                    height: '15px',
                    color: 'rgba(208, 220, 251,0.5)'
                }}
            >
                SHIB
            </span>
            <span
                className="zoom test1"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '0.937504px',
                    lineHeight: '1.17188px',
                    left: '787.417px',
                    top: '370.031px',
                    width: '2.16699px',
                    height: '1.17188px',
                    color: 'rgba(170, 192, 254,0.5)'
                }}
            >
                DAO
            </span>
            <span
                className="zoom test4"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '0.937504px',
                    lineHeight: '1.17188px',
                    left: '844.5px',
                    top: '313.031px',
                    width: '2.00098px',
                    height: '1.17188px',
                    color: 'rgba(208, 220, 251,0.5)'
                }}
            >
                PSA
            </span>
            <span
                className="zoom test4"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '4.61679px',
                    lineHeight: '5.77099px',
                    left: '447.996px',
                    top: '159.1px',
                    width: '16.0078px',
                    height: '6px',
                    color: 'rgba(160, 174, 192,0.5)'
                }}
            >
                BBBY
            </span>
            <span
                className="zoom test3"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '22.7358px',
                    lineHeight: '28.4197px',
                    left: '398.876px',
                    top: '435.132px',
                    width: '76.248px',
                    height: '28.4197px',
                    color: 'rgba(114, 143, 234,0.5)'
                }}
            >
                ESSC
            </span>
            <span
                className="zoom test3"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '37.9842px',
                    lineHeight: '47.4802px',
                    left: '299.279px',
                    top: '399.008px',
                    width: '104.442px',
                    height: '47.4802px',
                    color: 'rgba(144, 205, 244,0.5)'
                }}
            >
                AMD
            </span>
            <span
                className="zoom test1"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '11.7314px',
                    lineHeight: '14.6643px',
                    left: '363.883px',
                    top: '364.5px',
                    width: '32.2339px',
                    height: '15px',
                    color: 'rgba(170, 192, 254,0.5)'
                }}
            >
                ATVI
            </span>
            <span
                className="zoom test4"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '0.937504px',
                    lineHeight: '1.17188px',
                    left: '844.833px',
                    top: '256.031px',
                    width: '1.33301px',
                    height: '1.17188px',
                    color: 'rgba(0, 163, 196,0.5)'
                }}
            >
                CF
            </span>
            <span
                className="zoom test2"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '22.7358px',
                    lineHeight: '28.4197px',
                    left: '826.662px',
                    top: '188.132px',
                    width: '18.6758px',
                    height: '28.4197px',
                    color: 'rgba(170, 192, 254,0.5)'
                }}
            >
                V
            </span>
            <span
                className="zoom test3"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '0.937504px',
                    lineHeight: '1.17188px',
                    left: '673.833px',
                    top: '446.031px',
                    width: '1.33398px',
                    height: '1.17188px',
                    color: 'rgba(190, 227, 248,0.5)'
                }}
            >
                EV
            </span>
            <span
                className="zoom test2"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '22.7358px',
                    lineHeight: '28.4197px',
                    left: '339.39px',
                    top: '150.132px',
                    width: '62.2207px',
                    height: '28.4197px',
                    color: 'rgba(114, 143, 234,0.5)'
                }}
            >
                OCC
            </span>
            <span
                className="zoom test4"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '37.9842px',
                    lineHeight: '47.4802px',
                    left: '222.326px',
                    top: '209.008px',
                    width: '125.349px',
                    height: '47.4802px',
                    color: 'rgba(144, 205, 244,0.5)'
                }}
            >
                UPST
            </span>
            <span
                className="zoom test3"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '0.937504px',
                    lineHeight: '1.17188px',
                    left: '844.083px',
                    top: '332.031px',
                    width: '2.8335px',
                    height: '1.17188px',
                    color: 'rgba(114, 143, 234,0.5)'
                }}
            >
                USDC
            </span>
            <span
                className="zoom test3"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '22.7358px',
                    lineHeight: '28.4197px',
                    left: '296.7px',
                    top: '359.132px',
                    width: '71.5996px',
                    height: '28.4197px',
                    color: 'rgba(160, 174, 192,0.5)'
                }}
            >
                AAPL
            </span>
            <span
                className="zoom test4"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '4.61679px',
                    lineHeight: '5.77099px',
                    left: '675.999px',
                    top: '121.1px',
                    width: '16.002px',
                    height: '6px',
                    color: 'rgba(114, 143, 234,0.5)'
                }}
            >
                BREZ
            </span>
            <span
                className="zoom test3"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '0.937504px',
                    lineHeight: '1.17188px',
                    left: '806.417px',
                    top: '199.031px',
                    width: '2.16699px',
                    height: '1.17188px',
                    color: 'rgba(160, 174, 192,0.5)'
                }}
            >
                GDP
            </span>
            <span
                className="zoom test3"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '4.61679px',
                    lineHeight: '5.77099px',
                    left: '450.168px',
                    top: '140.1px',
                    width: '11.6631px',
                    height: '6px',
                    color: 'rgba(160, 174, 192,0.5)'
                }}
            >
                FCF
            </span>
            <span
                className="zoom test1"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '11.7314px',
                    lineHeight: '14.6643px',
                    left: '815.163px',
                    top: '174.5px',
                    width: '41.6748px',
                    height: '15px',
                    color: 'rgba(170, 192, 254,0.5)'
                }}
            >
                NEAR
            </span>
            <span
                className="zoom test1"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '4.61679px',
                    lineHeight: '5.77099px',
                    left: '693.889px',
                    top: '463.1px',
                    width: '18.2227px',
                    height: '6px',
                    color: 'rgba(114, 143, 234,0.5)'
                }}
            >
                MATIC
            </span>
            <span
                className="zoom test1"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '37.9842px',
                    lineHeight: '47.4802px',
                    left: '732px',
                    top: '456.008px',
                    width: '94px',
                    height: '47.4802px',
                    color: 'rgba(0, 163, 196,0.5)'
                }}
            >
                NET
            </span>
            <span
                className="zoom test3"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '4.61679px',
                    lineHeight: '5.77099px',
                    left: '868.053px',
                    top: '235.1px',
                    width: '11.8945px',
                    height: '6px',
                    color: 'rgba(190, 227, 248,0.5)'
                }}
            >
                PAC
            </span>
            <span
                className="zoom test4"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '37.9842px',
                    lineHeight: '47.4802px',
                    left: '321.605px',
                    top: '95.0079px',
                    width: '135.791px',
                    height: '47.4802px',
                    color: 'rgba(190, 227, 248,0.5)'
                }}
            >
                PUMP
            </span>
            <span
                className="zoom test2"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '4.61679px',
                    lineHeight: '5.77099px',
                    left: '809.163px',
                    top: '159.1px',
                    width: '15.6738px',
                    height: '6px',
                    color: 'rgba(114, 143, 234,0.5)'
                }}
            >
                ROLL
            </span>
            <span
                className="zoom test1"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '11.7314px',
                    lineHeight: '14.6643px',
                    left: '858.169px',
                    top: '364.5px',
                    width: '31.6626px',
                    height: '15px',
                    color: 'rgba(170, 192, 254,0.5)'
                }}
            >
                OUT
            </span>
            <span
                className="zoom test4"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '0.937504px',
                    lineHeight: '1.17188px',
                    left: '331.101px',
                    top: '313.031px',
                    width: '2.79736px',
                    height: '1.17188px',
                    color: 'rgba(144, 205, 244,0.5)'
                }}
            >
                ATOM
            </span>
            <span
                className="zoom test3"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '22.7358px',
                    lineHeight: '28.4197px',
                    left: '835.876px',
                    top: '397.132px',
                    width: '76.248px',
                    height: '28.4197px',
                    color: 'rgba(160, 174, 192,0.5)'
                }}
            >
                BHSE
            </span>
            <span
                className="zoom test3"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '0.937504px',
                    lineHeight: '1.17188px',
                    left: '541px',
                    top: '123.031px',
                    width: '1px',
                    height: '1.17188px',
                    color: 'rgba(160, 174, 192,0.5)'
                }}
            >
                UI
            </span>
            <span
                className="zoom test1"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '11.7314px',
                    lineHeight: '14.6643px',
                    left: '875.92px',
                    top: '212.5px',
                    width: '34.1602px',
                    height: '15px',
                    color: 'rgba(114, 143, 234,0.5)'
                }}
            >
                CMC
            </span>
            <span
                className="zoom test2"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '0.937504px',
                    lineHeight: '1.17188px',
                    left: '426.778px',
                    top: '161.031px',
                    width: '1.44434px',
                    height: '1.17188px',
                    color: 'rgba(208, 220, 251,0.5)'
                }}
            >
                RH
            </span>
            <span
                className="zoom test4"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '11.7314px',
                    lineHeight: '14.6643px',
                    left: '745.004px',
                    top: '117.5px',
                    width: '29.9927px',
                    height: '15px',
                    color: 'rgba(141, 173, 179,0.5)'
                }}
            >
                TGT
            </span>
            <span
                className="zoom test4"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '4.61679px',
                    lineHeight: '5.77099px',
                    left: '865.667px',
                    top: '387.1px',
                    width: '16.667px',
                    height: '6px',
                    color: 'rgba(144, 205, 244,0.5)'
                }}
            >
                ZNGA
            </span>
            <span
                className="zoom test4"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '4.61679px',
                    lineHeight: '5.77099px',
                    left: '577.167px',
                    top: '121.1px',
                    width: '4.66699px',
                    height: '6px',
                    color: 'rgba(0, 163, 196,0.5)'
                }}
            >
                G
            </span>
            <span
                className="zoom test4"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '11.7314px',
                    lineHeight: '14.6643px',
                    left: '300.925px',
                    top: '193.5px',
                    width: '44.1504px',
                    height: '15px',
                    color: 'rgba(160, 174, 192,0.5)'
                }}
            >
                TTWO
            </span>
            <span
                className="zoom test2"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '37.9842px',
                    lineHeight: '47.4802px',
                    left: '793.279px',
                    top: '95.0079px',
                    width: '104.442px',
                    height: '47.4802px',
                    color: 'rgba(160, 174, 192,0.5)'
                }}
            >
                CRO
            </span>
            <span
                className="zoom test2"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '22.7358px',
                    lineHeight: '28.4197px',
                    left: '892.104px',
                    top: '359.132px',
                    width: '77.793px',
                    height: '28.4197px',
                    color: 'rgba(160, 174, 192,0.5)'
                }}
            >
                BUSD
            </span>
            <span
                className="zoom test1"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '0.937504px',
                    lineHeight: '1.17188px',
                    left: '350.833px',
                    top: '237.031px',
                    width: '1.33301px',
                    height: '1.17188px',
                    color: 'rgba(114, 143, 234,0.5)'
                }}
            >
                TH
            </span>
            <span
                className="zoom test3"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '11.7314px',
                    lineHeight: '14.6643px',
                    left: '855.667px',
                    top: '193.5px',
                    width: '36.665px',
                    height: '15px',
                    color: 'rgba(160, 174, 192,0.5)'
                }}
            >
                CURI
            </span>
            <span
                className="zoom test3"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '11.7314px',
                    lineHeight: '14.6643px',
                    left: '851.998px',
                    top: '155.5px',
                    width: '25.0049px',
                    height: '15px',
                    color: 'rgba(170, 192, 254,0.5)'
                }}
            >
                ICP
            </span>
            <span
                className="zoom test2"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '4.61679px',
                    lineHeight: '5.77099px',
                    left: '904.217px',
                    top: '235.1px',
                    width: '15.5654px',
                    height: '6px',
                    color: 'rgba(0, 163, 196,0.5)'
                }}
            >
                AAVE
            </span>
            <span
                className="zoom test3"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '0.937504px',
                    lineHeight: '1.17188px',
                    left: '863.667px',
                    top: '218.031px',
                    width: '1.66699px',
                    height: '1.17188px',
                    color: 'rgba(190, 227, 248,0.5)'
                }}
            >
                IRS
            </span>
            <span
                className="zoom test4"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '37.9842px',
                    lineHeight: '47.4802px',
                    left: '902.704px',
                    top: '171.008px',
                    width: '56.5928px',
                    height: '47.4802px',
                    color: 'rgba(114, 143, 234,0.5)'
                }}
            >
                TA
            </span>
            <span
                className="zoom test1"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '11.7314px',
                    lineHeight: '14.6643px',
                    left: '778.495px',
                    top: '155.5px',
                    width: '20.0098px',
                    height: '15px',
                    color: 'rgba(141, 173, 179,0.5)'
                }}
            >
                PS
            </span>
            <span
                className="zoom test4"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '4.61679px',
                    lineHeight: '5.77099px',
                    left: '830.439px',
                    top: '444.1px',
                    width: '11.1211px',
                    height: '6px',
                    color: 'rgba(160, 174, 192,0.5)'
                }}
            >
                AVA
            </span>
            <span
                className="zoom test3"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '11.7314px',
                    lineHeight: '14.6643px',
                    left: '379.085px',
                    top: '459.5px',
                    width: '20.8301px',
                    height: '15px',
                    color: 'rgba(160, 174, 192,0.5)'
                }}
            >
                TG
            </span>
            <span
                className="zoom test3"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '37.9842px',
                    lineHeight: '47.4802px',
                    left: '295.576px',
                    top: '456.008px',
                    width: '54.8486px',
                    height: '47.4802px',
                    color: 'rgba(0, 163, 196,0.5)'
                }}
            >
                SJ
            </span>
            <span
                className="zoom test3"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '22.7358px',
                    lineHeight: '28.4197px',
                    left: '227.734px',
                    top: '359.132px',
                    width: '57.5312px',
                    height: '28.4197px',
                    color: 'rgba(208, 220, 251,0.5)'
                }}
            >
                FTM
            </span>
            <span
                className="zoom test2"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '37.9842px',
                    lineHeight: '47.4802px',
                    left: '831.855px',
                    top: '456.008px',
                    width: '65.2905px',
                    height: '47.4802px',
                    color: 'rgba(144, 205, 244,0.5)'
                }}
            >
                AR
            </span>
            <span
                className="zoom test3"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '22.7358px',
                    lineHeight: '28.4197px',
                    left: '246.097px',
                    top: '131.132px',
                    width: '77.8066px',
                    height: '28.4197px',
                    color: 'rgba(160, 174, 192,0.5)'
                }}
            >
                SOLO
            </span>
            <span
                className="zoom test1"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '22.7358px',
                    lineHeight: '28.4197px',
                    left: '946.448px',
                    top: '226.132px',
                    width: '45.1035px',
                    height: '28.4197px',
                    color: 'rgba(114, 143, 234,0.5)'
                }}
            >
                GM
            </span>
            <span
                className="zoom test1"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '11.7314px',
                    lineHeight: '14.6643px',
                    left: '286.916px',
                    top: '174.5px',
                    width: '34.1675px',
                    height: '15px',
                    color: 'rgba(114, 143, 234,0.5)'
                }}
            >
                BMO
            </span>
            <span
                className="zoom test4"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '37.9842px',
                    lineHeight: '47.4802px',
                    left: '909.884px',
                    top: '399.008px',
                    width: '99.2324px',
                    height: '47.4802px',
                    color: 'rgba(141, 173, 179,0.5)'
                }}
            >
                NYC
            </span>
            <span
                className="zoom test4"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '22.7358px',
                    lineHeight: '28.4197px',
                    left: '208.11px',
                    top: '397.132px',
                    width: '77.7793px',
                    height: '28.4197px',
                    color: 'rgba(0, 163, 196,0.5)'
                }}
            >
                TEAM
            </span>
            <span
                className="zoom test4"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '4.61679px',
                    lineHeight: '5.77099px',
                    left: '671.333px',
                    top: '102.1px',
                    width: '6.33398px',
                    height: '6px',
                    color: 'rgba(190, 227, 248,0.5)'
                }}
            >
                OI
            </span>
            <span
                className="zoom test3"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '0.937504px',
                    lineHeight: '1.17188px',
                    left: '293.111px',
                    top: '275.031px',
                    width: '2.77832px',
                    height: '1.17188px',
                    color: 'rgba(144, 205, 244,0.5)'
                }}
            >
                VCRA
            </span>
            <span
                className="zoom test1"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '0.937504px',
                    lineHeight: '1.17188px',
                    left: '787.453px',
                    top: '142.031px',
                    width: '2.09326px',
                    height: '1.17188px',
                    color: 'rgba(141, 173, 179,0.5)'
                }}
            >
                CTO
            </span>
            <span
                className="zoom test3"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '11.7314px',
                    lineHeight: '14.6643px',
                    left: '908.917px',
                    top: '155.5px',
                    width: '44.165px',
                    height: '15px',
                    color: 'rgba(114, 143, 234,0.5)'
                }}
            >
                MRNA
            </span>
            <span
                className="zoom test4"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '11.7314px',
                    lineHeight: '14.6643px',
                    left: '859.824px',
                    top: '440.5px',
                    width: '28.3521px',
                    height: '15px',
                    color: 'rgba(0, 163, 196,0.5)'
                }}
            >
                ELA
            </span>
            <span
                className="zoom test1"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '22.7358px',
                    lineHeight: '28.4197px',
                    left: '207.148px',
                    top: '169.132px',
                    width: '60.7031px',
                    height: '28.4197px',
                    color: 'rgba(190, 227, 248,0.5)'
                }}
            >
                API3
            </span>
            <span
                className="zoom test4"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '4.61679px',
                    lineHeight: '5.77099px',
                    left: '905.832px',
                    top: '140.1px',
                    width: '12.3369px',
                    height: '6px',
                    color: 'rgba(190, 227, 248,0.5)'
                }}
            >
                MLP
            </span>
            <span
                className="zoom test4"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '37.9842px',
                    lineHeight: '47.4802px',
                    left: '243.43px',
                    top: '437.008px',
                    width: '26.1392px',
                    height: '47.4802px',
                    color: 'rgba(0, 163, 196,0.5)'
                }}
            >
                L
            </span>
            <span
                className="zoom test2"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '22.7358px',
                    lineHeight: '28.4197px',
                    left: '979.928px',
                    top: '188.132px',
                    width: '73.1445px',
                    height: '28.4197px',
                    color: 'rgba(141, 173, 179,0.5)'
                }}
            >
                REAL
            </span>
            <span
                className="zoom test3"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '22.7358px',
                    lineHeight: '28.4197px',
                    left: '130.552px',
                    top: '359.132px',
                    width: '80.8965px',
                    height: '28.4197px',
                    color: 'rgba(170, 192, 254,0.5)'
                }}
            >
                ROKU
            </span>
            <span
                className="zoom test1"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '11.7314px',
                    lineHeight: '14.6643px',
                    left: '283.998px',
                    top: '117.5px',
                    width: '40.0049px',
                    height: '15px',
                    color: 'rgba(141, 173, 179,0.5)'
                }}
            >
                FREE
            </span>
            <span
                className="zoom test4"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '22.7358px',
                    lineHeight: '28.4197px',
                    left: '922px',
                    top: '454.132px',
                    width: '56px',
                    height: '28.4197px',
                    color: 'rgba(144, 205, 244,0.5)'
                }}
            >
                BTC
            </span>
            <span
                className="zoom test2"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '22.7358px',
                    lineHeight: '28.4197px',
                    left: '169px',
                    top: '207.132px',
                    width: '42px',
                    height: '28.4197px',
                    color: 'rgba(208, 220, 251,0.5)'
                }}
            >
                ON
            </span>
            <span
                className="zoom test4"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '22.7358px',
                    lineHeight: '28.4197px',
                    left: '930.876px',
                    top: '112.132px',
                    width: '76.248px',
                    height: '28.4197px',
                    color: 'rgba(160, 174, 192,0.5)'
                }}
            >
                BENE
            </span>
            <span
                className="zoom test4"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '37.9842px',
                    lineHeight: '47.4802px',
                    left: '181.942px',
                    top: '95.0079px',
                    width: '73.1162px',
                    height: '47.4802px',
                    color: 'rgba(208, 220, 251,0.5)'
                }}
            >
                GO
            </span>
            <span
                className="zoom test3"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '0.937504px',
                    lineHeight: '1.17188px',
                    left: '920.778px',
                    top: '256.031px',
                    width: '1.44434px',
                    height: '1.17188px',
                    color: 'rgba(0, 163, 196,0.5)'
                }}
            >
                DD
            </span>
            <span
                className="zoom test2"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '37.9842px',
                    lineHeight: '47.4802px',
                    left: '69.0405px',
                    top: '152.008px',
                    width: '127.919px',
                    height: '47.4802px',
                    color: 'rgba(190, 227, 248,0.5)'
                }}
            >
                MSFT
            </span>
            <span
                className="zoom test1"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '0.937504px',
                    lineHeight: '1.17188px',
                    left: '274.722px',
                    top: '256.031px',
                    width: '1.55518px',
                    height: '1.17188px',
                    color: 'rgba(144, 205, 244,0.5)'
                }}
            >
                MC
            </span>
            <span
                className="zoom test1"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '11.7314px',
                    lineHeight: '14.6643px',
                    left: '897.919px',
                    top: '193.5px',
                    width: '9.1626px',
                    height: '15px',
                    color: 'rgba(0, 163, 196,0.5)'
                }}
            >
                F
            </span>
            <span
                className="zoom test2"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '0.937504px',
                    lineHeight: '1.17188px',
                    left: '293.259px',
                    top: '408.031px',
                    width: '2.48242px',
                    height: '1.17188px',
                    color: 'rgba(160, 174, 192,0.5)'
                }}
            >
                PLTR
            </span>
            <span
                className="zoom test1"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '22.7358px',
                    lineHeight: '28.4197px',
                    left: '979.786px',
                    top: '150.132px',
                    width: '54.4277px',
                    height: '28.4197px',
                    color: 'rgba(170, 192, 254,0.5)'
                }}
            >
                NFT
            </span>
            <span
                className="zoom test2"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '11.7314px',
                    lineHeight: '14.6643px',
                    left: '212.996px',
                    top: '155.5px',
                    width: '30.0073px',
                    height: '15px',
                    color: 'rgba(190, 227, 248,0.5)'
                }}
            >
                LRC
            </span>
            <span
                className="zoom test2"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '37.9842px',
                    lineHeight: '47.4802px',
                    left: '124px',
                    top: '437.008px',
                    width: '94px',
                    height: '47.4802px',
                    color: 'rgba(208, 220, 251,0.5)'
                }}
            >
                ETH
            </span>
            <span
                className="zoom test1"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '4.61679px',
                    lineHeight: '5.77099px',
                    left: '979.501px',
                    top: '387.1px',
                    width: '16.998px',
                    height: '6px',
                    color: 'rgba(114, 143, 234,0.5)'
                }}
            >
                FORD
            </span>
            <span
                className="zoom test2"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '11.7314px',
                    lineHeight: '14.6643px',
                    left: '284.419px',
                    top: '98.5px',
                    width: '39.1626px',
                    height: '15px',
                    color: 'rgba(141, 173, 179,0.5)'
                }}
            >
                WISH
            </span>
            <span
                className="zoom test1"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '37.9842px',
                    lineHeight: '47.4802px',
                    left: '51.5466px',
                    top: '304.008px',
                    width: '67.9067px',
                    height: '47.4802px',
                    color: 'rgba(160, 174, 192,0.5)'
                }}
            >
                SQ
            </span>
            <span
                className="zoom test2"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '22.7358px',
                    lineHeight: '28.4197px',
                    left: '1024.93px',
                    top: '226.132px',
                    width: '59.1309px',
                    height: '28.4197px',
                    color: 'rgba(114, 143, 234,0.5)'
                }}
            >
                OXY
            </span>
            <span
                className="zoom test3"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '0.937504px',
                    lineHeight: '1.17188px',
                    left: '768.454px',
                    top: '104.031px',
                    width: '2.09277px',
                    height: '1.17188px',
                    color: 'rgba(0, 163, 196,0.5)'
                }}
            >
                TAIT
            </span>
            <span
                className="zoom test2"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '37.9842px',
                    lineHeight: '47.4802px',
                    left: '1002.28px',
                    top: '437.008px',
                    width: '104.442px',
                    height: '47.4802px',
                    color: 'rgba(160, 174, 192,0.5)'
                }}
            >
                AMC
            </span>
            <span
                className="zoom test4"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '0.937504px',
                    lineHeight: '1.17188px',
                    left: '882.537px',
                    top: '180.031px',
                    width: '1.92627px',
                    height: '1.17188px',
                    color: 'rgba(0, 163, 196,0.5)'
                }}
            >
                ATH
            </span>
            <span
                className="zoom test4"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '0.937504px',
                    lineHeight: '1.17188px',
                    left: '958.564px',
                    top: '351.031px',
                    width: '1.87109px',
                    height: '1.17188px',
                    color: 'rgba(141, 173, 179,0.5)'
                }}
            >
                BAT
            </span>
            <span
                className="zoom test3"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '4.61679px',
                    lineHeight: '5.77099px',
                    left: '957.499px',
                    top: '330.1px',
                    width: '4.00195px',
                    height: '6px',
                    color: 'rgba(190, 227, 248,0.5)'
                }}
            >
                B
            </span>
            <span
                className="zoom test3"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '4.61679px',
                    lineHeight: '5.77099px',
                    left: '165.835px',
                    top: '330.1px',
                    width: '10.3301px',
                    height: '6px',
                    color: 'rgba(0, 163, 196,0.5)'
                }}
            >
                ZIM
            </span>
            <span
                className="zoom test3"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '0.937504px',
                    lineHeight: '1.17188px',
                    left: '958.861px',
                    top: '313.031px',
                    width: '1.27783px',
                    height: '1.17188px',
                    color: 'rgba(160, 174, 192,0.5)'
                }}
            >
                FB
            </span>
            <span
                className="zoom test1"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '11.7314px',
                    lineHeight: '14.6643px',
                    left: '129.58px',
                    top: '231.5px',
                    width: '25.8398px',
                    height: '15px',
                    color: 'rgba(190, 227, 248,0.5)'
                }}
            >
                BIG
            </span>
            <span
                className="zoom test3"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '4.61679px',
                    lineHeight: '5.77099px',
                    left: '235.499px',
                    top: '273.1px',
                    width: '4.00195px',
                    height: '6px',
                    color: 'rgba(208, 220, 251,0.5)'
                }}
            >
                K
            </span>
            <span
                className="zoom test3"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '0.937504px',
                    lineHeight: '1.17188px',
                    left: '901.417px',
                    top: '446.031px',
                    width: '2.16699px',
                    height: '1.17188px',
                    color: 'rgba(208, 220, 251,0.5)'
                }}
            >
                CEO
            </span>
            <span
                className="zoom test2"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '0.937504px',
                    lineHeight: '1.17188px',
                    left: '218.139px',
                    top: '256.031px',
                    width: '0.722168px',
                    height: '1.17188px',
                    color: 'rgba(190, 227, 248,0.5)'
                }}
            >
                D
            </span>
            <span
                className="zoom test3"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '22.7358px',
                    lineHeight: '28.4197px',
                    left: '113.714px',
                    top: '397.132px',
                    width: '57.5723px',
                    height: '28.4197px',
                    color: 'rgba(0, 163, 196,0.5)'
                }}
            >
                BNB
            </span>
            <span
                className="zoom test2"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '11.7314px',
                    lineHeight: '14.6643px',
                    left: '155.993px',
                    top: '345.5px',
                    width: '30.0146px',
                    height: '15px',
                    color: 'rgba(160, 174, 192,0.5)'
                }}
            >
                SOL
            </span>
            <span
                className="zoom test1"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '37.9842px',
                    lineHeight: '47.4802px',
                    left: '1077.31px',
                    top: '361.008px',
                    width: '125.372px',
                    height: '47.4802px',
                    color: 'rgba(170, 192, 254,0.5)'
                }}
            >
                LUNA
            </span>
            <span
                className="zoom test1"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '4.61679px',
                    lineHeight: '5.77099px',
                    left: '1017.34px',
                    top: '406.1px',
                    width: '17.3291px',
                    height: '6px',
                    color: 'rgba(160, 174, 192,0.5)'
                }}
            >
                MCMJ
            </span>
            <span
                className="zoom test1"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '22.7358px',
                    lineHeight: '28.4197px',
                    left: '74.9414px',
                    top: '245.132px',
                    width: '59.1172px',
                    height: '28.4197px',
                    color: 'rgba(208, 220, 251,0.5)'
                }}
            >
                CAN
            </span>
            <span
                className="zoom test1"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '22.7358px',
                    lineHeight: '28.4197px',
                    left: '1044.88px',
                    top: '169.132px',
                    width: '76.248px',
                    height: '28.4197px',
                    color: 'rgba(114, 143, 234,0.5)'
                }}
            >
                ESSC
            </span>
            <span
                className="zoom test2"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '37.9842px',
                    lineHeight: '47.4802px',
                    left: '1021.28px',
                    top: '95.0079px',
                    width: '104.442px',
                    height: '47.4802px',
                    color: 'rgba(160, 174, 192,0.5)'
                }}
            >
                AMD
            </span>
            <span
                className="zoom test1"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '11.7314px',
                    lineHeight: '14.6643px',
                    left: '173.883px',
                    top: '421.5px',
                    width: '32.2339px',
                    height: '15px',
                    color: 'rgba(160, 174, 192,0.5)'
                }}
            >
                ATVI
            </span>
            <span
                className="zoom test1"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '0.937504px',
                    lineHeight: '1.17188px',
                    left: '996.833px',
                    top: '275.031px',
                    width: '1.33398px',
                    height: '1.17188px',
                    color: 'rgba(141, 173, 179,0.5)'
                }}
            >
                EV
            </span>
            <span
                className="zoom test4"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '37.9842px',
                    lineHeight: '47.4802px',
                    left: '1094.67px',
                    top: '304.008px',
                    width: '109.651px',
                    height: '47.4802px',
                    color: 'rgba(144, 205, 244,0.5)'
                }}
            >
                INTC
            </span>
            <span
                className="zoom test4"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '22.7358px',
                    lineHeight: '28.4197px',
                    left: '1094.7px',
                    top: '245.132px',
                    width: '71.5996px',
                    height: '28.4197px',
                    color: 'rgba(190, 227, 248,0.5)'
                }}
            >
                AAPL
            </span>
            <span
                className="zoom test1"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '0.937504px',
                    lineHeight: '1.17188px',
                    left: '274.417px',
                    top: '446.031px',
                    width: '2.16699px',
                    height: '1.17188px',
                    color: 'rgba(208, 220, 251,0.5)'
                }}
            >
                GDP
            </span>
            <span
                className="zoom test1"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '22.7358px',
                    lineHeight: '28.4197px',
                    left: '74.7793px',
                    top: '207.132px',
                    width: '40.4414px',
                    height: '28.4197px',
                    color: 'rgba(160, 174, 192,0.5)'
                }}
            >
                CC
            </span>
            <span
                className="zoom test3"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '0.937504px',
                    lineHeight: '1.17188px',
                    left: '977.101px',
                    top: '370.031px',
                    width: '2.79736px',
                    height: '1.17188px',
                    color: 'rgba(190, 227, 248,0.5)'
                }}
            >
                ATOM
            </span>
            <span
                className="zoom test1"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '22.7358px',
                    lineHeight: '28.4197px',
                    left: '16.5518px',
                    top: '378.132px',
                    width: '80.8965px',
                    height: '28.4197px',
                    color: 'rgba(208, 220, 251,0.5)'
                }}
            >
                AMCX
            </span>
            <span
                className="zoom test1"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '0.937504px',
                    lineHeight: '1.17188px',
                    left: '218px',
                    top: '389.031px',
                    width: '1px',
                    height: '1.17188px',
                    color: 'rgba(141, 173, 179,0.5)'
                }}
            >
                UI
            </span>
            <span
                className="zoom test3"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '37.9842px',
                    lineHeight: '47.4802px',
                    left: '72.2209px',
                    top: '95.0079px',
                    width: '83.5581px',
                    height: '47.4802px',
                    color: 'rgba(141, 173, 179,0.5)'
                }}
            >
                NIO
            </span>
            <span
                className="zoom test4"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '11.7314px',
                    lineHeight: '14.6643px',
                    left: '992.004px',
                    top: '98.5px',
                    width: '29.9927px',
                    height: '15px',
                    color: 'rgba(144, 205, 244,0.5)'
                }}
            >
                TGT
            </span>
            <span
                className="zoom test4"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '4.61679px',
                    lineHeight: '5.77099px',
                    left: '105.667px',
                    top: '292.1px',
                    width: '16.667px',
                    height: '6px',
                    color: 'rgba(160, 174, 192,0.5)'
                }}
            >
                ZNGA
            </span>
            <span
                className="zoom test2"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '4.61679px',
                    lineHeight: '5.77099px',
                    left: '1014.17px',
                    top: '254.1px',
                    width: '4.66699px',
                    height: '6px',
                    color: 'rgba(170, 192, 254,0.5)'
                }}
            >
                G
            </span>
            <span
                className="zoom test1"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '22.7358px',
                    lineHeight: '28.4197px',
                    left: '1100.78px',
                    top: '207.132px',
                    width: '40.4414px',
                    height: '28.4197px',
                    color: 'rgba(141, 173, 179,0.5)'
                }}
            >
                NU
            </span>
            <span
                className="zoom test1"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '11.7314px',
                    lineHeight: '14.6643px',
                    left: '1041.92px',
                    top: '421.5px',
                    width: '44.1504px',
                    height: '15px',
                    color: 'rgba(160, 174, 192,0.5)'
                }}
            >
                TTWO
            </span>
            <span
                className="zoom test2"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '22.7358px',
                    lineHeight: '28.4197px',
                    left: '28.6357px',
                    top: '416.132px',
                    width: '75.7285px',
                    height: '28.4197px',
                    color: 'rgba(0, 163, 196,0.5)'
                }}
            >
                HUYA
            </span>
            <span
                className="zoom test3"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '11.7314px',
                    lineHeight: '14.6643px',
                    left: '1061px',
                    top: '155.5px',
                    width: '25.0049px',
                    height: '15px',
                    color: 'rgba(141, 173, 179,0.5)'
                }}
            >
                ICP
            </span>
            <span
                className="zoom test3"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '4.61679px',
                    lineHeight: '5.77099px',
                    left: '1075.22px',
                    top: '216.1px',
                    width: '15.5654px',
                    height: '6px',
                    color: 'rgba(141, 173, 179,0.5)'
                }}
            >
                AAVE
            </span>
            <span
                className="zoom test1"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '0.937504px',
                    lineHeight: '1.17188px',
                    left: '920.667px',
                    top: '123.031px',
                    width: '1.66699px',
                    height: '1.17188px',
                    color: 'rgba(160, 174, 192,0.5)'
                }}
            >
                IRS
            </span>
            <span
                className="zoom test2"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '4.61679px',
                    lineHeight: '5.77099px',
                    left: '1096.44px',
                    top: '292.1px',
                    width: '11.1211px',
                    height: '6px',
                    color: 'rgba(144, 205, 244,0.5)'
                }}
            >
                AVA
            </span>
            <span
                className="zoom test1"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '11.7314px',
                    lineHeight: '14.6643px',
                    left: '72.1663px',
                    top: '364.5px',
                    width: '26.6675px',
                    height: '15px',
                    color: 'rgba(114, 143, 234,0.5)'
                }}
            >
                IGC
            </span>
            <span
                className="zoom test1"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '22.7358px',
                    lineHeight: '28.4197px',
                    left: '-0.124023px',
                    top: '264.132px',
                    width: '76.248px',
                    height: '28.4197px',
                    color: 'rgba(0, 163, 196,0.5)'
                }}
            >
                SBUX
            </span>
            <span
                className="zoom test4"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '37.9842px',
                    lineHeight: '47.4802px',
                    left: '1150.58px',
                    top: '190.008px',
                    width: '54.8486px',
                    height: '47.4802px',
                    color: 'rgba(170, 192, 254,0.5)'
                }}
            >
                SJ
            </span>
            <span
                className="zoom test1"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '37.9842px',
                    lineHeight: '47.4802px',
                    left: '1135.85px',
                    top: '418.008px',
                    width: '65.2905px',
                    height: '47.4802px',
                    color: 'rgba(160, 174, 192,0.5)'
                }}
            >
                AR
            </span>
            <span
                className="zoom test3"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '22.7358px',
                    lineHeight: '28.4197px',
                    left: '1136.45px',
                    top: '150.132px',
                    width: '45.1035px',
                    height: '28.4197px',
                    color: 'rgba(160, 174, 192,0.5)'
                }}
            >
                GM
            </span>
            <span
                className="zoom test4"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '11.7314px',
                    lineHeight: '14.6643px',
                    left: '1122.92px',
                    top: '288.5px',
                    width: '34.1675px',
                    height: '15px',
                    color: 'rgba(208, 220, 251,0.5)'
                }}
            >
                BMO
            </span>
            <span
                className="zoom test2"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '37.9842px',
                    lineHeight: '47.4802px',
                    left: '-2.11621px',
                    top: '456.008px',
                    width: '99.2324px',
                    height: '47.4802px',
                    color: 'rgba(160, 174, 192,0.5)'
                }}
            >
                NYC
            </span>
            <span
                className="zoom test1"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '4.61679px',
                    lineHeight: '5.77099px',
                    left: '48.501px',
                    top: '235.1px',
                    width: '16.998px',
                    height: '6px',
                    color: 'rgba(141, 173, 179,0.5)'
                }}
            >
                AMZN
            </span>
            <span
                className="zoom test4"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '11.7314px',
                    lineHeight: '14.6643px',
                    left: '1138.17px',
                    top: '136.5px',
                    width: '41.6602px',
                    height: '15px',
                    color: 'rgba(208, 220, 251,0.5)'
                }}
            >
                TURN
            </span>
            <span
                className="zoom test1"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '11.7314px',
                    lineHeight: '14.6643px',
                    left: '16.8325px',
                    top: '250.5px',
                    width: '23.335px',
                    height: '15px',
                    color: 'rgba(160, 174, 192,0.5)'
                }}
            >
                BTI
            </span>
            <span
                className="zoom test3"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '4.61679px',
                    lineHeight: '5.77099px',
                    left: '1117px',
                    top: '425.1px',
                    width: '8.00391px',
                    height: '6px',
                    color: 'rgba(160, 174, 192,0.5)'
                }}
            >
                EA
            </span>
            <span
                className="zoom test4"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '11.7314px',
                    lineHeight: '14.6643px',
                    left: '23.824px',
                    top: '212.5px',
                    width: '28.3521px',
                    height: '15px',
                    color: 'rgba(170, 192, 254,0.5)'
                }}
            >
                ELA
            </span>
            <span
                className="zoom test4"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '37.9842px',
                    lineHeight: '47.4802px',
                    left: '15.4304px',
                    top: '152.008px',
                    width: '26.1392px',
                    height: '47.4802px',
                    color: 'rgba(160, 174, 192,0.5)'
                }}
            >
                L
            </span>
            <span
                className="zoom test4"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '0.937504px',
                    lineHeight: '1.17188px',
                    left: '1034.25px',
                    top: '313.031px',
                    width: '2.50098px',
                    height: '1.17188px',
                    color: 'rgba(144, 205, 244,0.5)'
                }}
            >
                SELF
            </span>
            <span
                className="zoom test2"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '4.61679px',
                    lineHeight: '5.77099px',
                    left: '1169.67px',
                    top: '292.1px',
                    width: '16.6699px',
                    height: '6px',
                    color: 'rgba(141, 173, 179,0.5)'
                }}
            >
                CPSR
            </span>
            <span
                className="zoom test1"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '11.7314px',
                    lineHeight: '14.6643px',
                    left: '17.9976px',
                    top: '364.5px',
                    width: '40.0049px',
                    height: '15px',
                    color: 'rgba(208, 220, 251,0.5)'
                }}
            >
                FREE
            </span>
            <span
                className="zoom test4"
                style={{
                    position: 'absolute',
                    display: 'block',
                    fontStyle: 'normal',
                    fontVariantCaps: 'normal',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    whiteSpace: 'nowrap',
                    fontFamily: 'sans-serif',
                    fontSize: '4.61679px',
                    lineHeight: '5.77099px',
                    left: '10.9961px',
                    top: '330.1px',
                    width: '16.0078px',
                    height: '6px',
                    color: 'rgba(160, 174, 192,0.5)'
                }}
            >
                BABA
            </span>
        </div>
    );
}
