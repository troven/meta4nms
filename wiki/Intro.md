

Let's build something.

Let's start with a problem statement:

	There are no freely available, real-time, Infrastructure Analytics app that can be easily 
	downloaded and deployed.
	
Engineers need active and passive probes to collect measurements and inventory from vantage points in their network, analyse the results, and plot them on a beautifully dashboard.

User Background
---------------

Joe is a DevOps engineer, managing a fleet of 20 physical servers running 8 virtual machines each. 
He is also running a dozen or so AWS, Google Compute, Azure, etc instances. 

His R&D team are ready to push out their new micro-services solutions - and Joe is going to have
to keep track of hundreds of docker containers - at peak load, maybe 10 per customer.

He needs a day to day tool that ideally, will both impress and inform when projected in the boardroom.

User Journeys
-------------

As a DevOps engineer, Joe will want to:

1) Configure a monitored device
2) Activate a monitoring probe
3) Collect and archive performance data
4) Identify bottleneck using real-time analysis
5) Explore trends with historic analysis

Business Models
---------------

It's often helpful to list down the business objects (nouns) in your problem domain, for example:

	Endpoint	- a network connection
	Device		- an entity with one or more Endpoints
	Probe		- a passive agent that polls Endpoints for data
	Sensor		- an active agent that reacts to 3rd party information
	Telemetry	- co-ordinates polling, mediates between endpoints, probes & sensors
	Collector	- listens for events and exports them to storage, 3rd parties, etc

Each business model has related meta-data including schema, relationships, validation, widgets & editors.

It's coming together, we'll not worry too much about the detail. Later on, we'll design how they will interact.

In practice, we rarely see singular entities - mostly entities are gathered into model collections.

Views
-----

We'll need to create, modify, delete our models etc. For this we're going to need some CRUD views.


