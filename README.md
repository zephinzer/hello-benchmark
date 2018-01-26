# Hello Benchmark
This is a collection of Hello World applications for use with benchmark tests.

## Get Started
The benchmark tests require a fixed CPU and memory so that we can experiment with how to scale out various runtimes and frameworks. Hence we deploy the applications of interest to a local Docker Swarm.

### Pre-requisites
You will need Docker Community Edition (CE). Get it for your respective operating system from https://www.docker.com/community-edition#/download.

### TL;DR
Two convenience scripts are provided for you:

- `./setup.sh`
- `./teardown.sh`

Their use cases are left as an exercise to the reader.

### In Detail
To get started locally, run the following to **provision a single-node Docker Swarm**

```bash
docker swarm init
```

Next, **create a throwaway Docker Registry**:

```bash
docker service create --name registry --publish published=5000,target=5000 registry:2
```

Then **build all applications**:

```bash
docker-compose build
```

And then **push all application images to the throwaway repository**:

```bash
docker-compose push
```

Finally, **run all of them**:

```bash
docker stack deploy --compose-file docker-compose.yml hello_benchmark
```

## Testing

### Methodology

From this repository, we can control for both vertical and horizontal scaling to see how well different runtimes/frameworks perform under stress.

To scale a service vertically, increase the CPU or Memory from the `docker-compose.yml` file.

To scale a service horizontally, increase the number of replicas.

Find out what works for what runtime!

Here's some ideas:

#### Breaking Point Estimation

Gradually scale up the number of concurrent connections starting from 100 until errors begin to happen.

### Tools

#### Autocannon
Autocannon is a nice tool which provides some reasonable statistics.

Install it with:

```bash
npm i -g autocannon
```

Run it against any of the services with:

```bash
autocannon -c 20 -d 10 http://localhost:%PORT%
```

## Contributing
Want to test more frameworks/runtimes? Create a directory describing your tested runtime/library/framework and submit a merge request!

Cheers!
