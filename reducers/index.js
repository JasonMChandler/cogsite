const initialState = {
  nback: {
  	size:0,
  	timer:0,
  	time:0,
  	startTime:0,
  	timeElapsed:0,
  	matrix:[0,0,0,0,0,0,0,0,0],
  	sequence:[],
  	correct:0,
  	incorrect:0,
  	nbackLevel:1,
  	isItOn:true,
  	interval:50,
  	stepLength:4000,
  	correctBlock:-1,
  	currentBlock:-1,
  	previousStep:-1,
  	generateSequence: function(length,nback, percentageOfHits){

  		var targetNumber = Math.floor(length*percentageOfHits);
  		var finalArray;
  		//gives you a random number between the min and max, inclusive
  		function randomIntFromInterval(min, max) { // min and max included 
  		return Math.floor(Math.random() * (max - min + 1) + min)
		}
			var seqArray = [];

			for (var i = 0; i< length; i++) {
				seqArray.push(randomIntFromInterval(0,8));
			}
		// CheckHitNumber checks how many matches are in an array once supplied with an array of numbers and the n back number
		function checkHitNumber (arr,nback) {

			var checkArray = arr.map(a=>a);
			var numOfHits = 0;
			for (var i = 0; i< checkArray.length-nback; i++) {
				if (checkArray[i] === checkArray[i+nback] && Number.isInteger(checkArray[i])) {

					numOfHits++;
				}
			}

			return numOfHits;
		}
		function createArrayOfHits (arr,nback) {
			var checkArray = arr.map(a=>a);
			var listOfHitsArray = [];
			var numOfHits = 0;
			for (var i = 0; i< checkArray.length-nback; i++) {
				if (checkArray[i] === checkArray[i+nback] && Number.isInteger(checkArray[i])) {

					listOfHitsArray.push(i);
				}
			}

			return listOfHitsArray;
		}
		function checkIfHitAndSwitch (arr,nback) {

			var checkArray = arr.map(a=>a);

			var listOfHitsArray = createArrayOfHits(checkArray,nback);
			var locationInArray = listOfHitsArray[randomIntFromInterval(0,listOfHitsArray.length-1)];
			var oldValue = checkArray[locationInArray];

			while (checkArray[locationInArray] === oldValue) {
				
				checkArray[locationInArray] = randomIntFromInterval(0,8);

			}

			return checkArray;
		}
		//fillArray adds nback hits in random spots until it reaches a certain amount
		function fillArray(arr,nback) {

			var length = arr.length;
			var seqArrayFill = [...arr];
			var numOfHits = 0;
			var seqSpot = randomIntFromInterval(0,seqArrayFill.length-nback-1);
			var seqItem = randomIntFromInterval(0,8);


			if (checkHitNumber(seqArrayFill,nback) < targetNumber) {
				// if there aren't enough hits, add more					
				seqArrayFill[seqSpot] = seqItem;
				seqArrayFill[seqSpot+nback] = seqItem;

				return fillArray(seqArrayFill,nback);

			} else if (checkHitNumber(seqArrayFill,nback) > targetNumber) {
				//if there are too many hits random change the sequence
				seqArrayFill = checkIfHitAndSwitch(seqArrayFill,nback);
				return fillArray(seqArrayFill,nback);
			} else {
				// if just right return the array
				return seqArrayFill;

			}


		}
		finalArray = fillArray(seqArray, nback);

		//console.log(createArrayOfHits(finalArray, nback))

  		return finalArray;

  	},
  	
  },
};



const rootReducer = (state = initialState, action) => {
	console.log(action.type);
	var matrix = [0,0,0,0,0,0,0,0,0];
	var timer = state.nback.timer;
	var timeElapsed = 0;
	var step = 0;
	var stepLength = state.nback.stepLength;
	var halfStep = 0;
	var remainder = 0;
	var correctBlock = state.nback.correctBlock;
	var nbackClickReturnValue = {...state};
	var currentBlock = -1;
	var lock = state.nback.lock;
  switch (action.type) {
  	
    case "CLICK":
    return {...state};

    case "NBACKCLICK":
    if (state.nback.correctBlock !== -1 && state.nback.lock !== true) {

        if (state.nback.currentBlock === state.nback.correctBlock) {
        	nbackClickReturnValue = {...state, nback:{...state.nback, lock:true, correct: state.nback.correct+1}};
    	} else {
    		nbackClickReturnValue = {...state, nback:{...state.nback, lock:true, incorrect: state.nback.incorrect+1}};
    	}

    }



    return nbackClickReturnValue;
    case "NBACK":

    if (state.nback.isItOn && state.nback.time > 0) {
    timer++;
    // increment only when it's on
    timeElapsed = state.nback.time-state.nback.startTime;
    // find the elapsed amount of time since the 'time' was defined
    step = Math.floor(timeElapsed/stepLength);
    // find out what step of the sequence we're on
    halfStep = stepLength/2;
    // define the length of a half step
    remainder = timeElapsed % stepLength;
    // find how much time has elapsed between steps


   	matrix = state.nback.matrix.map((x,i)=>{
    	return 0;
    })
   	    if (remainder > halfStep) {
    	// if we're already more than halfway to the next step, then erase do nothing, which will lead to an empty grid display state ie [0,0,0,0,0,0,0,0,0]
    } else {
    	matrix[state.nback.sequence[step]] = 1;
    	correctBlock = state.nback.sequence[step-state.nback.nbackLevel];
    	// if it's less than halfway to the next step display blink the appropriate grid tile
    }
    currentBlock = state.nback.sequence[step];

    // nback.lock makes sure you can't do more than one incorrect or correct answer per step this unlocks at a new step
    if (state.nback.previousStep !== step) {
    	lock = false;
    }
    }


    	//add state with payload - payload.key tells what state object key to change - value is the value to be set for that state object key


      return {...state, nback:{...state.nback, [action.payload.key]:action.payload.value, ["timer"]:timer,timeElapsed:timeElapsed,matrix:matrix,correctBlock:correctBlock,currentBlock:currentBlock,previousStep:step,lock:lock }};
    default:
    console.log(action.type);
      return state;
  }
};
export default rootReducer;