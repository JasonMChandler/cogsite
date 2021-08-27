import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Grid, Paper } from '@material-ui/core';
export default function nBack(props) {
    const gridItem = useRef(null);
    const dispatch = useDispatch();
    const state = useSelector((state) => state.nback)



    useEffect(() => {
            dispatch({ type: "NBACK", payload: { key: "width", value: window.innerWidth } })
            dispatch({ type: "NBACK", payload: { key: "height", value: window.innerHeight } })
            dispatch({ type: "NBACK", payload: { key: "largerDimension", value: window.innerHeight > window.innerWidth ? "height" : "width" } })



            dispatch({ type: "NBACK", payload: { key: "sequence", value: state.generateSequence(32,3,.40)} })

            dispatch({ type: "NBACK", payload: { key: "startTime", value: Date.now()} })
    }, [])


    useEffect(() => {

            let timer = setInterval(function(){

            	dispatch({ type: "NBACK", payload: { key: "time", value: Date.now()} })

            },state.interval)
		
    }, [])




    return (<Grid style={{width:(() => {return state.largerDimension === "height" ? state.width : state.height})(), height:(() => {return state.largerDimension === "height" ? state.width : state.height})()}} container><Grid onClick={() => dispatch({type:"NBACK", payload:{key:"size",value:state.size+1}})} justifyContent="space-around" alignItems="center" container>
    	<Grid item><div onClick={() => dispatch({ type: "NBACKCLICK", payload: { key: "boxClick", value: 0} })} className={state.matrix[0] === 0 ? "boxesdefault" : "boxeslit"} style={{width:(() => {return state.largerDimension === "height" ? (state.width - 30)/3 : (state.height - 30)/3})(),height:(() => {return state.largerDimension === "height" ? (state.width - 30)/3 : (state.height - 30)/3})()}} square={true}></div></Grid>
    	<Grid item><div onClick={() => dispatch({ type: "NBACKCLICK", payload: { key: "boxClick", value: 1} })} className={state.matrix[1] === 0 ? "boxesdefault" : "boxeslit"} style={{width:(() => {return state.largerDimension === "height" ? (state.width - 30)/3 : (state.height - 30)/3})(),height:(() => {return state.largerDimension === "height" ? (state.width - 30)/3 : (state.height - 30)/3})()}} square={true}></div></Grid>
    	<Grid item><div onClick={() => dispatch({ type: "NBACKCLICK", payload: { key: "boxClick", value: 2} })} className={state.matrix[2] === 0 ? "boxesdefault" : "boxeslit"} style={{width:(() => {return state.largerDimension === "height" ? (state.width - 30)/3 : (state.height - 30)/3})(),height:(() => {return state.largerDimension === "height" ? (state.width - 30)/3 : (state.height - 30)/3})()}} square={true}></div></Grid>
    	</Grid>

    	<Grid onClick={() => dispatch({type:"NBACK", payload:{key:"size",value:state.size+1}})} justifyContent="space-around" alignItems="center" container>
    	<Grid item><div onClick={() => dispatch({ type: "NBACKCLICK", payload: { key: "boxClick", value: 3} })} className={state.matrix[3] === 0 ? "boxesdefault" : "boxeslit"} style={{width:(() => {return state.largerDimension === "height" ? (state.width - 30)/3 : (state.height - 30)/3})(),height:(() => {return state.largerDimension === "height" ? (state.width - 30)/3 : (state.height - 30)/3})()}} square={true}></div></Grid>
    	<Grid item><div onClick={() => dispatch({ type: "NBACKCLICK", payload: { key: "boxClick", value: 4} })} className={state.matrix[4] === 0 ? "boxesdefault" : "boxeslit"} style={{width:(() => {return state.largerDimension === "height" ? (state.width - 30)/3 : (state.height - 30)/3})(),height:(() => {return state.largerDimension === "height" ? (state.width - 30)/3 : (state.height - 30)/3})()}} square={true}></div></Grid>
    	<Grid item><div onClick={() => dispatch({ type: "NBACKCLICK", payload: { key: "boxClick", value: 5} })} className={state.matrix[5] === 0 ? "boxesdefault" : "boxeslit"} style={{width:(() => {return state.largerDimension === "height" ? (state.width - 30)/3 : (state.height - 30)/3})(),height:(() => {return state.largerDimension === "height" ? (state.width - 30)/3 : (state.height - 30)/3})()}} square={true}></div></Grid>
    	</Grid>


    	<Grid onClick={() => dispatch({type:"NBACK", payload:{key:"size",value:state.size+1}})} justifyContent="space-around" alignItems="center" container>
    	<Grid item><div onClick={() => dispatch({ type: "NBACKCLICK", payload: { key: "boxClick", value: 6} })} className={state.matrix[6] === 0 ? "boxesdefault" : "boxeslit"} style={{width:(() => {return state.largerDimension === "height" ? (state.width - 30)/3 : (state.height - 30)/3})(),height:(() => {return state.largerDimension === "height" ? (state.width - 30)/3 : (state.height - 30)/3})()}} square={true}></div></Grid>
    	<Grid item><div onClick={() => dispatch({ type: "NBACKCLICK", payload: { key: "boxClick", value: 7} })} className={state.matrix[7] === 0 ? "boxesdefault" : "boxeslit"} style={{width:(() => {return state.largerDimension === "height" ? (state.width - 30)/3 : (state.height - 30)/3})(),height:(() => {return state.largerDimension === "height" ? (state.width - 30)/3 : (state.height - 30)/3})()}} square={true}></div></Grid>
    	<Grid item><div onClick={() => dispatch({ type: "NBACKCLICK", payload: { key: "boxClick", value: 8} })} className={state.matrix[8] === 0 ? "boxesdefault" : "boxeslit"} style={{width:(() => {return state.largerDimension === "height" ? (state.width - 30)/3 : (state.height - 30)/3})(),height:(() => {return state.largerDimension === "height" ? (state.width - 30)/3 : (state.height - 30)/3})()}} square={true}></div></Grid>
    	</Grid>



    	</Grid>)
}