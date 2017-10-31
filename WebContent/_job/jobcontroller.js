app.controller('JobController',function($scope,$location,JobService){
	$scope.job={jobid:'',jobtitle:'',jobdesc:'',posteddate:'',qualification:'',skillreq:'',salary:'',location:'',companyurl:'',isAvailable:''}
	$scope.saveJob=function(){
		console.log('entering save job in job controller')
		JobService.saveJob($scope.job)
		.then(function(response){
			console.log("successfully inserted job details");
			alert("Posted job successfully");
			$location.path('/home');
		},function(response){
			console.log("failure " +response.status);
			console.log(response.data.message)
			if(response.status==401){
				$location.path('/login')
			}
			else{
				console.log(response.data.message)
				$location.path('/postjob')
			}			
		})
	}
	
	
	function getAllJobs(){
		console.log('entering get All jobs')
		JobService.getAllJobs()
		.then(function(response){
			console.log(response.status); //200
			$scope.jobs=response.data;  //List<Job>
			
		},function(response){
			console.log(response.status)
		})
	}
	getAllJobs();
	
	
	
})










/*

	$scope.getAllJobs=function(){
		console.log('get all jobs')
		JobService.getAllJobs()
		.then(function(response){
			console.log(response.status);
			$scope.jobs=response.data;
			alert(response.data)
		},function(response){
			console.log(response.status)
		})
	}
*/