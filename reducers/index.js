const initialState = {
  nback: {
  	size:0,
  	timer:0,
  	time:0,
  	
  	generateSequence: function(length,nback, percentageOfHits){
  		var targetNumber = Math.floor(length*percentageOfHits);
  		var finalArray;
  		//gives you a random number between the min and max, inclusive
  		function randomIntFromInterval(min, max) { // min and max included 
  		return Math.floor(Math.random() * (max - min + 1) + min)
		}
			var seqArray = [];

			for (var i = 0; i< length; i++) {
				seqArray.push(randomIntFromInterval(0,9));
			}
		// CheckHitNumber checks how many matches are in an array once supplied with an array of numbers and the n back number
		function checkHitNumber (arr,nback) {
			var checkArray = [...arr];
			var numOfHits = 0;
			for (var i = 0; i< checkArray.length-nback; i++) {
				if (checkArray[i] === checkArray[i+nback] && Number.isInteger(checkArray[i])) {

					numOfHits++;
				}
			}

			return numOfHits;
		}

		//fillArray adds nback hits in random spots until it reaches a certain amount
		function fillArray(arr,nback) {

			var length = arr.length;
			var seqArrayFill = [...arr];
			var numOfHits = 0;
			var seqSpot = randomIntFromInterval(0,seqArrayFill.length-nback-1);
			var seqItem = randomIntFromInterval(0,9);


			if (checkHitNumber(seqArrayFill,nback) < targetNumber) {
				// if there aren't enough hits, add more					
				seqArrayFill[seqSpot] = seqItem;
				seqArrayFill[seqSpot+nback] = seqItem;

				return fillArray(seqArrayFill,nback);

			} else if (checkHitNumber(seqArrayFill,nback) > targetNumber) {
				//if there are too many hits random change the sequence
				seqArrayFill[seqSpot+nback] = seqItem;
				return fillArray(seqArrayFill,nback);
			} else {
				// if just right return the array
				return seqArrayFill;

			}


		}
		finalArray = fillArray(seqArray, nback);


  		return seqArray;
  	},
  	sequence:[],
  },
};

const rootReducer = (state = initialState, action) => {
	console.log(action.type);
  switch (action.type) {

    case "CLICK":
      return {...state};
    case "NBACK":


    	//add state with payload - payload.key tells what state object key to change - value is the value to be set for that state object key


      return {...state, nback:{...state.nback, [action.payload.key]:action.payload.value}};
    default:
    console.log(action.type);
      return state;
  }
};
export default rootReducer;