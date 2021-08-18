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



            let timer = setTimeout(function(){
            	dispatch({ type: "NBACK", payload: { key: "timer", value: state.timer+1 } })
            	dispatch({ type: "NBACK", payload: { key: "time", value: Date.now()} })

            },10)

            return () => {
        	clearTimeout(timer);
      		};
		
    }, [])


    return (<Grid style={{width:(() => {return state.largerDimension === "height" ? state.width : state.height})(), height:(() => {return state.largerDimension === "height" ? state.width : state.height})()}} container><Grid onClick={() => dispatch({type:"NBACK", payload:{key:"size",value:state.size+1}})} justifyContent="space-around" alignItems="center" container>
    	<Grid item><Paper style={{width:(() => {return state.largerDimension === "height" ? (state.width - 30)/3 : (state.height - 30)/3})(),height:(() => {return state.largerDimension === "height" ? (state.width - 30)/3 : (state.height - 30)/3})()}} square={true}></Paper></Grid>
    	<Grid item><Paper style={{width:(() => {return state.largerDimension === "height" ? (state.width - 30)/3 : (state.height - 30)/3})(),height:(() => {return state.largerDimension === "height" ? (state.width - 30)/3 : (state.height - 30)/3})()}} square={true}></Paper></Grid>
    	<Grid item><Paper style={{width:(() => {return state.largerDimension === "height" ? (state.width - 30)/3 : (state.height - 30)/3})(),height:(() => {return state.largerDimension === "height" ? (state.width - 30)/3 : (state.height - 30)/3})()}} square={true}></Paper></Grid>
    	</Grid>

    	<Grid onClick={() => dispatch({type:"NBACK", payload:{key:"size",value:state.size+1}})} justifyContent="space-around" alignItems="center" container>
    	<Grid item><Paper style={{width:(() => {return state.largerDimension === "height" ? (state.width - 30)/3 : (state.height - 30)/3})(),height:(() => {return state.largerDimension === "height" ? (state.width - 30)/3 : (state.height - 30)/3})()}} square={true}></Paper></Grid>
    	<Grid item><Paper style={{width:(() => {return state.largerDimension === "height" ? (state.width - 30)/3 : (state.height - 30)/3})(),height:(() => {return state.largerDimension === "height" ? (state.width - 30)/3 : (state.height - 30)/3})()}} square={true}></Paper></Grid>
    	<Grid item><Paper style={{width:(() => {return state.largerDimension === "height" ? (state.width - 30)/3 : (state.height - 30)/3})(),height:(() => {return state.largerDimension === "height" ? (state.width - 30)/3 : (state.height - 30)/3})()}} square={true}></Paper></Grid>
    	</Grid>


    	<Grid onClick={() => dispatch({type:"NBACK", payload:{key:"size",value:state.size+1}})} justifyContent="space-around" alignItems="center" container>
    	<Grid item><Paper style={{width:(() => {return state.largerDimension === "height" ? (state.width - 30)/3 : (state.height - 30)/3})(),height:(() => {return state.largerDimension === "height" ? (state.width - 30)/3 : (state.height - 30)/3})()}} square={true}></Paper></Grid>
    	<Grid item><Paper style={{width:(() => {return state.largerDimension === "height" ? (state.width - 30)/3 : (state.height - 30)/3})(),height:(() => {return state.largerDimension === "height" ? (state.width - 30)/3 : (state.height - 30)/3})()}} square={true}></Paper></Grid>
    	<Grid item><Paper style={{width:(() => {return state.largerDimension === "height" ? (state.width - 30)/3 : (state.height - 30)/3})(),height:(() => {return state.largerDimension === "height" ? (state.width - 30)/3 : (state.height - 30)/3})()}} square={true}></Paper></Grid>
    	</Grid>



    	</Grid>)
}