/* IT5080 DevOps – lecture notes (written from the lecturer's slides, Nimal Ratnayake, SLIIT) */
DATA.mod("IT5080").lectures = [
{
  id: 1, pdf: "pdfs/it5080/lectures/lecture-01.pdf", pages: 27,
  title: "Introduction to DevOps",
  desc: "What DevOps is, the silo problem it solves, the DevOps lifecycle and continuous testing, DevOps culture, tools, DevSecOps, cloud-native and the XaaS service models.",
  sections: [
    { h: "What is DevOps?", items: [
      "<b>DevOps</b> is a newer approach to software development (the SDLC) <b>and a change of organisational culture</b>. It speeds up delivery of high-quality software by <b>integrating and automating</b> the work of software development (Dev) and IT operations (Ops) teams.",
      "Traditionally Dev and Ops worked in isolation: each team was a <b>silo</b> and there was a <b>“wall of confusion”</b> between them.",
      "<b>Before DevOps – Waterfall:</b> months of development, months of integration, months of QA/security/ops testing. Releases were months or years apart – a stressful “big bang”.",
      "<b>Agile</b> introduced smaller, more frequent updates, responding to change instead of following a strict plan, plus <b>CI/CD</b>: small chunks merged every week (CI), then automatically built, tested and prepared for production (CD). But the silos remained a bottleneck.",
      "<b>From Agile to DevOps</b> needed (1) new processes and tools that extend CI/CD to the rest of the delivery lifecycle and (2) close collaboration between Dev and Ops at every step – i.e. a cultural change."
    ]},
    { h: "The DevOps lifecycle", items: [
      "<b>Version 1 – 8 phases:</b> Dev = <b>Plan, Code, Build, Test</b>; Ops = <b>Release, Deploy, Operate, Monitor</b>.",
      "<b>Version 2 – 6 phases:</b> Dev = <b>Plan, Build, Continuous Integration</b>; Ops = <b>Deploy, Operate, Continuous Feedback</b>. Code + Build are merged into Build; testing is no longer a separate phase (it happens everywhere); real-time communication is shown explicitly.",
      "<b>Planning</b> – scope new features using prioritised end-user feedback, case studies and stakeholder input.",
      "<b>Development</b> – code, build and test features; practices include test-driven development (TDD), pair programming and peer code review; the developer’s “inner loop” runs on the local workstation.",
      "<b>Integration (CI/CD)</b> – new code is merged into the code base, tested and packaged into an executable. Typical activities: merge into master, check out from the repository, compile, unit test, package. <b>Output: a build artifact stored in a binary repository.</b>",
      "<b>Deployment</b> – the build is deployed to a runtime environment (usually dev/test first) for runtime, quality, compliance and security tests. Good practice for production: deploy to a <b>subset of users first</b>, then everyone once stable.",
      "<b>Operations</b> – monitor performance, behaviour and availability; keep network, storage, platform, compute and security healthy; identify incidents, alert people, find causes and apply fixes.",
      "<b>Learning (continuous feedback)</b> – gather feedback from users on features, performance and business value, and plan the next release."
    ]},
    { h: "Continuous testing", items: [
      "Testing occurs in <b>all</b> phases: Planning – TDD/BDD; Development – unit and contract testing; Integration – static code scans, CVE scans, linting; Deployment – smoke, penetration and configuration testing; Operations – chaos and compliance testing; Learning – A/B testing."
    ]},
    { h: "DevOps culture", items: [
      "<b>Organisational level:</b> continuous communication, collaboration and <b>shared responsibility</b> among all stakeholders – not just Dev and Ops but also security, compliance, governance, risk and business teams.",
      "<b>Technical level:</b> commitment to <b>automation</b> that keeps work moving between workflows, and to <b>feedback and measurement</b>."
    ]},
    { h: "Benefits, DevSecOps and cloud-native", items: [
      "<b>Benefits:</b> collaboration and trust; <b>speed</b> (frequent releases, faster bug fixes); improved product quality; <b>automation</b> of repetitive tasks; higher productivity; <b>cost savings</b> (less manpower).",
      "<b>DevSecOps</b> = DevOps that continuously integrates and automates <b>security</b> throughout the lifecycle (shift-left) instead of treating it as a final phase.",
      "<b>Cloud-native</b> = apps built for the cloud: <b>microservices</b> (loosely coupled, independently deployable), deployed in <b>containers</b>, operated at scale by an orchestrator such as <b>Kubernetes</b>. Cloud-native and DevOps go well together."
    ]},
    { h: "DevOps tools (and the tools covered in IT5080)", items: [
      "<b>By phase:</b> Code/version control – GitHub, GitLab, Bitbucket; Build – Maven; Test – Selenium, JUnit; Release – Jenkins, Bamboo; Deploy/Operate – Docker, Chef, Puppet, Ansible, Kubernetes; Monitor – Nagios, Cacti, Splunk, Prometheus; Collaboration – Slack.",
      "<b>Covered in this module:</b> Docker (containers), Kubernetes (orchestration), Ansible (automation), Jenkins (CI server / CD hub), Git/GitHub (version control), Selenium (web automation), AWS Lambda (serverless), Grafana + Prometheus (monitoring)."
    ]},
    { h: "Monitoring: Prometheus and Grafana", items: [
      "<b>Prometheus</b> is an open-source monitoring and alerting system. It <b>scrapes (pulls) metrics</b> over HTTP from applications, containers, Kubernetes and exporters, stores them as <b>time-series data</b>, can be queried with <b>PromQL</b>, and its <b>Alertmanager</b> sends alerts (email, Slack).",
      "<b>Grafana</b> is the <b>visualisation</b> layer: it connects to data sources such as Prometheus and builds <b>dashboards</b>, graphs and alerts for operators and teams.",
      "Together they cover the <i>Operate / Monitor</i> phases: Prometheus collects and stores the numbers; Grafana shows them. <i>(Course tool list and past-paper topic; details from general knowledge.)</i>"
    ]},
    { h: "Cloud service models (XaaS)", items: [
      "<b>IaaS</b> – provider gives VMs/hardware (compute, storage, network); you install OS, runtime and apps. <b>PaaS</b> – provider gives a development platform. <b>SaaS</b> – a complete managed application; you only manage your data. <b>CaaS</b> – run containerised applications. <b>FaaS / Serverless</b> – you supply functions only.",
      "<b>FaaS:</b> provider handles all server management; <b>auto-scaling</b>; <b>billing by actual execution time</b>; <b>event-driven</b> execution (HTTP requests, DB updates, file uploads, timers)."
    ]}
  ],
  terms: [
    ["DevOps", "Culture and set of practices that integrate and automate development and operations to deliver quality software faster."],
    ["Silo / wall of confusion", "Isolation between Dev and Ops teams that DevOps removes."],
    ["Waterfall vs Agile", "Waterfall = big releases after months; Agile = small, frequent updates and CI/CD."],
    ["DevOps lifecycle v1", "Plan, Code, Build, Test, Release, Deploy, Operate, Monitor (8 phases)."],
    ["DevOps lifecycle v2", "Plan, Build, Continuous Integration, Deploy, Operate, Continuous Feedback (6 phases)."],
    ["CI / CD", "Continuous Integration: merge, build and test small changes often. Continuous Delivery/Deployment: automatically prepare/release to environments."],
    ["Continuous testing", "Testing in every phase, not as one separate phase."],
    ["Organisational commitment", "Continuous communication, collaboration and shared responsibility across all stakeholders."],
    ["DevSecOps", "Security integrated and automated throughout the DevOps lifecycle."],
    ["Cloud-native", "Microservices in containers, orchestrated (e.g. Kubernetes)."],
    ["IaaS / PaaS / SaaS / CaaS / FaaS", "Infrastructure, Platform, Software, Containers and Functions as a Service."],
    ["Prometheus", "Pull-based metrics collection, time-series storage, PromQL and alerting."],
    ["Grafana", "Dashboards and visualisation of metrics from sources such as Prometheus."]
  ]
},
{
  id: 2, pdf: "pdfs/it5080/lectures/lecture-02.pdf", pages: 63,
  title: "Containers and Docker",
  desc: "Containers versus VMs, Docker architecture, images, registries, container lifecycle, data persistence, Dockerfiles, Docker commands, Docker Compose, secrets and networking.",
  sections: [
    { h: "Native vs virtual machine vs container", items: [
      "<b>Native:</b> apps share hardware, OS and runtimes – isolation <b>low</b>.",
      "<b>Virtual machine:</b> each app has its own virtual hardware, guest OS and runtime on a <b>hypervisor</b> – isolation <b>high</b>, but heavy.",
      "<b>Container:</b> each app has its own runtime but <b>shares the host OS kernel</b> – isolation <b>medium</b>; lightweight and fast. On Linux it uses kernel <b>namespaces</b> and <b>cgroups</b>.",
      "A container is a standard unit of software that packages an application and all its dependencies so it runs quickly and reliably in any environment – it ends “it works on my computer”.",
      "<b>Similar roles:</b> the hypervisor (VMs) and the container engine (containers) both sit between hardware/OS and the workloads and let many isolated workloads share one host. <b>Not identical:</b> a hypervisor virtualises hardware and every VM runs its own OS; a container engine shares the host kernel.",
      "Why a container is more efficient than a VM: no guest OS per app, so smaller images, <b>faster start-up</b>, less CPU/RAM overhead and more instances per host."
    ]},
    { h: "Docker architecture", items: [
      "Docker uses <b>client–server</b> architecture. The <b>Docker daemon (dockerd)</b> manages images, containers, networks and volumes. The <b>Docker client / CLI (docker)</b> sends commands to the daemon over a REST API (UNIX socket or network). <b>Docker Compose</b> is another client for multi-container applications. <b>Docker Desktop</b> bundles daemon, CLI, Compose and a Linux VM.",
      "A <b>registry</b> stores images. <b>Docker Hub</b> is the default public registry; you can run a private one. <code>docker pull</code> / <code>docker run</code> fetch from it; <code>docker push</code> uploads to it.",
      "An <b>image</b> is a read-only template with instructions for creating a container; identified by <b>name:tag</b> (e.g. <code>nginx:1.27</code>). A <b>container</b> is a runnable instance of an image (many containers per image).",
      "Other systems: LXC/LXD, Windows containers (process and Hyper-V isolation), Podman (daemonless drop-in replacement for Docker)."
    ]},
    { h: "Container lifecycle", items: [
      "Container states: <b>Created</b> → <b>Running (Up)</b> ⇄ <b>Paused</b> → <b>Exited (stopped)</b> → <b>Removed (deleted)</b>. (Docker also reports Restarting and Dead.) A container can stop on error and be restarted by the daemon; it stays on the host until explicitly removed.",
      "Commands: <code>docker create</code>/<code>run</code> (Created→Running), <code>pause</code>/<code>unpause</code>, <code>stop</code> (graceful) / <code>kill</code> / <code>restart</code>, <code>rm</code>."
    ]},
    { h: "Persisting data", items: [
      "Data written inside a container is lost when the container is removed. To persist it store it on the host:",
      "<b>Volume</b> – managed by Docker (<code>/var/lib/docker/volumes/</code>); best for persistent app data. <b>Bind mount</b> – any host path, can be modified by host processes at any time. <b>tmpfs mount</b> – RAM only, removed when the container stops.",
      "Syntax: <code>-v myvol2:/app</code> or <code>--mount source=myvol2,target=/app</code>; bind mount <code>-v /var/myws1app:/app</code> or <code>--mount type=bind,source=/var/myws1app,target=/app</code>."
    ]},
    { h: "Dockerfile and layers", items: [
      "A <b>Dockerfile</b> defines the steps to create an image. <b>Each instruction creates a read-only layer</b>; when you rebuild only the changed layers are rebuilt – this keeps images small, lightweight and fast to build.",
      "Common instructions: <code>FROM</code>, <code>RUN</code>, <code>COPY</code>, <code>ENV</code>, <code>EXPOSE</code>, <code>ENTRYPOINT</code>, <code>CMD</code>.",
      "<b>ENTRYPOINT</b> = the executable that always runs (use when the container behaves like an executable). <b>CMD</b> = default arguments (or ad-hoc command); it is <b>overridden</b> by arguments to <code>docker run</code>. Both have exec form <code>[\"cmd\",\"arg\"]</code> and shell form.",
      "<pre><code>FROM nginx\nCOPY ./html /usr/share/nginx/html</code></pre><pre><code>docker build -t my-nginx .\ndocker run --name my-nginx-container -d my-nginx</code></pre>"
    ]},
    { h: "Essential Docker commands", items: [
      "<code>docker pull nginx:1.24</code> – download an image. <code>docker run -d -p 8081:80 --name nginx-1 nginx</code> – run detached (<code>-d</code>), map host port 8081 to container port 80 (<code>-p host:container</code>), name it.",
      "<code>docker ps</code> (running) / <code>docker ps -a</code> (all); <code>docker inspect NAME|ID</code> – full JSON details of a container (or image with <code>docker image inspect</code>); <code>docker top NAME</code> – processes in the container; <code>docker logs --follow NAME</code>; <code>docker exec -it NAME /bin/bash</code> – run a command inside; <code>docker cp</code> – copy files between host and container.",
      "<code>docker start|stop|kill|pause|unpause|restart|rm NAME</code>. Images: <code>docker image ls | rm | prune | push</code>. Build: <code>docker build -t name:tag .</code>.",
      "Volumes: <code>docker volume create|inspect|rm|prune</code>. Networks: <code>docker network create|ls|connect|disconnect|inspect|prune</code>."
    ]},
    { h: "Docker Compose", items: [
      "Compose defines and runs <b>multi-container</b> applications from one YAML file (default <code>docker-compose.yaml</code> / <code>compose.yaml</code>). <b>Why not one container for everything?</b> Containers are designed for one process each; separate containers are easier to restart, log and scale.",
      "<b>Advantages over many <code>docker run</code> commands:</b> one declarative file for the whole app; one command (<code>docker compose up -d</code> / <code>down</code>) to start/stop everything; automatic network and name resolution between services; dependency order (<code>depends_on</code>); repeatable and version-controlled; easy to create/destroy test environments.",
      "Keys: <code>services</code> (one per container), <code>image</code> or <code>build</code> (<code>context</code> = directory, <code>dockerfile</code> = file name), <code>ports</code> (<code>\"host:container\"</code>), <code>environment</code>, <code>volumes</code>, <code>depends_on</code>, <code>secrets</code>, top-level <code>volumes</code>, <code>networks</code>, <code>secrets</code>.",
      "<pre><code>services:\n  web:\n    image: nginx:1.27\n    ports:\n      - \"8080:80\"\n  db:\n    image: mariadb:11\n    environment:\n      - MYSQL_USER_PASSWORD=TopSecret</code></pre>",
      "Compose commands: <code>up -d</code>, <code>down</code>, <code>build</code>, <code>create</code>, <code>start</code>, <code>stop</code>, <code>pause</code>, <code>top</code>, <code>rm</code>."
    ]},
    { h: "Environment variables and secrets", items: [
      "<b>Environment variables</b> pass parameters from the host to a container or between containers (set in <code>environment:</code> or the Dockerfile <code>ENV</code>).",
      "<b>Secrets</b> convey passwords, certificates and API keys <b>without putting them in clear text</b>. Two steps: define under the top-level <code>secrets:</code> (e.g. <code>file: db_password.txt</code>), then list them under the service's <code>secrets:</code>. The container reads them from <code>/run/secrets/name</code>, usually through a <code>VAR_FILE</code> variable.",
      "<pre><code>services:\n  db:\n    image: mariadb:11\n    environment:\n      - MYSQL_USER_PASSWORD_FILE=/run/secrets/db_password\n    secrets:\n      - db_password\nsecrets:\n  db_password:\n    file: db_password.txt</code></pre>"
    ]},
    { h: "Docker networking", items: [
      "Three default networks: <b>bridge</b> (default for new containers, 172.17.0.0/16, gateway 172.17.0.1), <b>host</b> (no isolation; container uses the host network – port clashes possible), <b>none</b> (completely isolated).",
      "Network types (drivers): <b>bridge</b> (containers on one host), <b>host</b>, <b>none</b>, <b>overlay</b> (connect containers across multiple Docker daemons), <b>macvlan</b> (container gets its own MAC address and appears as a physical device), <b>ipvlan</b> (full control of IPv4/IPv6 addressing).",
      "On the <b>default</b> bridge containers reach each other by IP only; on a <b>user-defined</b> bridge they also resolve each other by <b>name or alias</b> (built-in DNS).",
      "<b>Compose</b> creates a bridge network <code>&lt;directory&gt;_default</code> automatically; services are discoverable by service name. You can define several networks (e.g. frontend and backend) to control which containers can talk."
    ]}
  ],
  terms: [
    ["Container", "Standard unit of software packaging an app and its dependencies; shares the host OS kernel."],
    ["Hypervisor vs container engine", "Both host isolated workloads; hypervisor virtualises hardware (each VM has an OS), the engine shares the host kernel."],
    ["Image", "Read-only template with instructions to create a container, identified by name:tag."],
    ["Layer", "Read-only filesystem change created by each Dockerfile instruction; cached and reused."],
    ["Docker daemon (dockerd)", "Background service that manages images, containers, networks and volumes."],
    ["Docker CLI / client", "Command-line tool that sends commands to the daemon over a REST API."],
    ["Registry", "Server that stores and distributes images (e.g. Docker Hub)."],
    ["Container states", "Created, Running (Up), Paused, Exited, Removed."],
    ["Volume", "Docker-managed persistent storage on the host."],
    ["Bind mount", "A host directory/file mounted into the container; host can change it."],
    ["tmpfs mount", "Memory-only storage, removed when the container stops."],
    ["ENTRYPOINT vs CMD", "ENTRYPOINT = fixed executable; CMD = default arguments, overridden on docker run."],
    ["Docker Compose", "Defines and runs multi-container apps from a YAML file."],
    ["Secret", "Sensitive data (password, key) delivered as a file in /run/secrets instead of clear-text env vars."],
    ["Bridge / host / none", "Default networks: private NAT network, host's own network, no network."],
    ["Overlay network", "Connects containers running on different Docker hosts."],
    ["-p 8080:80", "Map host port 8080 to container port 80."]
  ]
},
{
  id: 3, pdf: "pdfs/it5080/lectures/lecture-03.pdf", pages: 92,
  title: "Container Orchestration: Kubernetes",
  desc: "Why orchestration, cluster architecture, pods, Deployments and StatefulSets, volumes, PV/PVC, Services, Ingress, rolling updates and Helm.",
  sections: [
    { h: "Orchestration and Kubernetes", items: [
      "Docker Engine runs containers but does <b>not</b> automate managing them. A <b>container orchestration</b> system automates provisioning, deployment, networking, scaling, availability and lifecycle management (Kubernetes, Docker Swarm, Apache Mesos).",
      "Kubernetes (K8s) provides: <b>clustering</b>, <b>deployment</b> to a desired state, <b>rollouts</b> (upgrade/pause/resume/roll back), <b>service discovery</b>, <b>storage provisioning</b>, <b>load balancing</b>, <b>autoscaling</b> and <b>self-healing</b> (restart/replace failed containers)."
    ]},
    { h: "Cluster architecture", items: [
      "A cluster = <b>control plane</b> (master node) + <b>worker nodes</b> (data plane). The master runs the <b>API server</b>, the <b>scheduler</b> (decides when/where pods run based on requirements and capacity), the controller manager and <b>etcd</b> (cluster state store).",
      "<b>Worker node</b> components: <b>kubelet</b> (agent that receives and executes orders from the master, ensures containers run and reports status), <b>kube-proxy</b> (network proxy implementing Services) and a <b>container runtime</b> (containerd, Docker).",
      "<b>API server</b> exposes the Kubernetes API used by nodes and by users (via <code>kubectl</code>). It runs on the master node.",
      "<b>How a kubectl command changes nodes:</b> kubectl converts the command to a REST call to the API server → API server validates it and records the desired state in etcd → the scheduler assigns new pods to suitable nodes → the <b>kubelet</b> on that node (watching the API server) tells the container runtime to start/stop containers; controllers keep reconciling actual state with desired state.",
      "<b>Slave (worker) components and who they talk to:</b> kubelet ↔ API server (receives pod specs, reports status); kube-proxy ↔ API server (watches Services/Endpoints); container runtime ↔ kubelet."
    ]},
    { h: "Pods and workloads", items: [
      "A <b>Pod</b> is the smallest unit in Kubernetes: one or more containers with shared storage and network. Kubernetes creates, destroys and manages pods, not containers. Put containers in separate pods if they must scale or be placed independently.",
      "Pods are rarely created directly (if a node fails the pods are lost). Use <b>workload resources</b> that manage pods: <b>Deployment (ReplicaSet)</b>, <b>StatefulSet</b>, <b>DaemonSet</b> (one pod per node – e.g. networking plugins), <b>Job</b> (run to completion once) and <b>CronJob</b> (scheduled jobs).",
      "<pre><code>apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginxp\nspec:\n  containers:\n  - name: nginxc\n    image: nginx:1.30\n    ports:\n    - containerPort: 80</code></pre>",
      "<code>kubectl apply -f file.yaml</code> / <code>create -f</code>; <code>kubectl get pods</code>; <code>kubectl logs POD</code>; <code>kubectl delete pod POD</code>; <code>kubectl describe …</code>; <code>kubectl port-forward POD 8080:80</code>; <code>kubectl explain pod</code>."
    ]},
    { h: "Deployment (stateless) – ReplicaSet and pods", items: [
      "A <b>Deployment</b> manages a <b>stateless</b> application: pods are interchangeable. It specifies the number of <b>replicas</b>, a label <b>selector</b> and a <b>pod template</b>. Applying it creates <b>1 Deployment + 1 ReplicaSet + N Pods</b>; the Deployment controller replaces failed pods (self-healing).",
      "<pre><code>apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-dpl\n  labels:\n    app: nginx\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.25\n        ports:\n        - containerPort: 80</code></pre>",
      "<b>Names:</b> only the Deployment has a name you choose. The ReplicaSet (<code>nginx-dpl-cbdccf466</code>) and its pods (<code>nginx-dpl-cbdccf466-fh4qq</code>) get <b>random suffixes</b>; a replacement pod gets a <b>different</b> name.",
      "<b>Rolling update:</b> edit the image/replicas and <code>kubectl apply</code>. A <b>new ReplicaSet</b> is created and scaled up while the old one is scaled down, so there is <b>zero downtime</b> (by default at most one pod unavailable/one extra). The old ReplicaSet is kept (scaled to 0) so you can roll back. <code>kubectl rollout status deployment/nginx-dpl</code>; <code>kubectl rollout undo deployment/nginx-dpl</code>.",
      "Example: 3 replicas of <code>httpd:2.4.57</code> changed to 4 replicas of <code>httpd:2.4.58</code> → the Deployment is <b>modified</b>; the old ReplicaSet is scaled to 0 (kept); <b>3 old pods are deleted</b> (gradually); <b>1 new ReplicaSet and 4 new pods are created</b>."
    ]},
    { h: "StatefulSet", items: [
      "With a ReplicaSet, all pods would share the same PVC/PV. A <b>StatefulSet</b> gives each pod a <b>stable identity</b>: a <b>predictable name</b> (<code>nginx-sts-0, -1, -2</code>, kept when a pod is replaced), its <b>own PVC/PV</b> (via <code>volumeClaimTemplates</code>), ordered start-up. Use for databases and other stateful, replicated apps.",
      "Applying a StatefulSet with 3 replicas and a volumeClaimTemplate creates: <b>1 StatefulSet, 3 Pods</b> (predictable names), <b>3 PVCs</b> (<code>varwww-nginx-sts-0..2</code>, 100Mi, ReadWriteOnce) and <b>3 dynamically provisioned PVs</b> (no ReplicaSet).",
      "<b>Deployment vs StatefulSet:</b> Deployment – stateless, interchangeable pods with random names, shared storage, scales/updates in any order. StatefulSet – stateful, unique ordinal names, per-pod storage, ordered creation/rolling update, needs a <b>headless Service</b>.",
      "<b>Converting a Deployment to a StatefulSet:</b> change <code>kind: StatefulSet</code> and add <code>serviceName: &lt;headless-service&gt;</code> under <code>spec</code> (and, for storage, <code>volumeClaimTemplates</code>). Going back to a Deployment: remove <code>volumeClaimTemplates</code> and <code>serviceName</code> (and replace the volume with a <code>volumes:</code> entry).",
      "<b>Headless Service</b> (<code>clusterIP: None</code>) gives each pod a stable DNS name instead of one virtual IP:",
      "<pre><code>apiVersion: v1\nkind: Service\nmetadata:\n  name: nginx-hl\nspec:\n  clusterIP: None\n  selector:\n    app: nginx\n  ports:\n  - port: 30080\n    targetPort: 80\n    name: web</code></pre>",
      "StatefulSet rolling updates: <code>kubectl rollout status sts/nginx-sts</code>, <code>kubectl rollout undo sts/nginx-sts</code>."
    ]},
    { h: "Volumes, PersistentVolumes and claims", items: [
      "Kubernetes volumes give pods storage. <b>Ephemeral</b> volumes live and die with the pod: <code>emptyDir</code> (empty at start; shared by containers), <code>configMap</code> (config data, read-only), <code>secret</code> (backed by tmpfs, read-only), <code>downwardAPI</code>. <code>hostPath</code> mounts a node file/directory (single-node clusters only).",
      "<b>Persistent</b> volumes outlive pods. A <b>PersistentVolume (PV)</b> is storage in the cluster (static – made by an admin, or dynamic – provisioned from a <b>StorageClass</b>). A <b>PersistentVolumeClaim (PVC)</b> is a user’s request for size and access mode; the control plane <b>binds</b> a PVC to a matching PV one-to-one. Analogy: Pod/Node ≈ PVC/PV.",
      "<b>Access modes:</b> ReadWriteOnce (one node, read-write), ReadOnlyMany, ReadWriteMany, ReadWriteOncePod. A pod uses a claim with <code>persistentVolumeClaim: claimName: …</code> in its volumes."
    ]},
    { h: "Services and Ingress", items: [
      "A <b>Service</b> exposes a set of pods (chosen by a label <b>selector</b>) behind a stable address and load-balances requests. <pre><code>apiVersion: v1\nkind: Service\nmetadata:\n  name: nginx-svc\nspec:\n  selector:\n    app: nginx\n  ports:\n  - protocol: TCP\n    port: 8080\n    targetPort: 80</code></pre>",
      "<b>ClusterIP</b> (default) – virtual IP reachable only inside the cluster. <b>NodePort</b> – opens a port (30000–32767) on every node: <code>&lt;NodeIP&gt;:&lt;NodePort&gt;</code>, for testing. <b>LoadBalancer</b> – provisions an external cloud load balancer; one per service.",
      "<b>Ingress</b> is not a Service type: it is the HTTP/HTTPS entry point. <b>One Ingress can expose many Services</b> by host/path rules and supports TLS. An <b>ingress controller</b> must be running (minikube: <code>minikube addons enable ingress</code>).",
      "<pre><code>apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: my-ingress\nspec:\n  rules:\n  - host: example.com\n    http:\n      paths:\n      - pathType: Prefix\n        path: /appA\n        backend:\n          service:\n            name: appa-svc\n            port:\n              number: 8080\n      - pathType: Prefix\n        path: /appB\n        backend:\n          service:\n            name: appb-svc\n            port:\n              number: 5080</code></pre>",
      "<table><tr><th>Method</th><th>External</th><th>Load balancing</th><th>TLS</th><th>Use</th></tr><tr><td>ClusterIP</td><td>No</td><td>Internal</td><td>No</td><td>Internal communication</td></tr><tr><td>NodePort</td><td>Yes (manual)</td><td>Primitive</td><td>No</td><td>Testing / development</td></tr><tr><td>LoadBalancer</td><td>Yes</td><td>Yes (cloud)</td><td>With config</td><td>Production in cloud</td></tr><tr><td>Ingress</td><td>Yes</td><td>Advanced</td><td>Yes</td><td>Web traffic to many services</td></tr></table>"
    ]},
    { h: "Helm", items: [
      "<b>Helm</b> manages Kubernetes applications using <b>charts</b> – packaged templates (<code>Chart.yaml</code> metadata, <code>values.yaml</code> defaults, <code>templates/</code> for Deployments, Services, PVCs…, <code>charts/</code> dependencies) published in repositories (Artifact Hub).",
      "<b>Advantages:</b> install a complete app with one command without writing the YAML; configurable through values; versioned releases with easy upgrade and rollback; reuse and sharing of charts; manages dependencies.",
      "<code>helm repo add bitnami https://charts.bitnami.com/bitnami</code>, <code>helm install my-wordpress bitnami/wordpress</code>, <code>helm list</code>, <code>helm status</code>, <code>helm delete</code>."
    ]},
    { h: "minikube and contexts", items: [
      "<code>minikube start</code>, <code>minikube addons enable dashboard|ingress</code>, <code>minikube dashboard</code>, <code>minikube service nginx-svc --url</code>, <code>minikube tunnel</code>. Check the context with <code>kubectl config get-contexts</code> and switch with <code>kubectl config set-context</code>."
    ]}
  ],
  terms: [
    ["Container orchestration", "Automating deployment, networking, scaling, availability and lifecycle of containers."],
    ["Control plane / master node", "Runs API server, scheduler, controllers and etcd; manages the cluster."],
    ["Worker node", "Runs pods; has kubelet, kube-proxy and a container runtime."],
    ["API server", "Front end of the control plane; exposes the Kubernetes API used by kubectl and nodes."],
    ["Scheduler", "Chooses which node a new pod runs on, based on requirements and capacity."],
    ["kubelet", "Agent on each worker node that runs the pods ordered by the control plane."],
    ["kubectl", "CLI used to talk to the API server."],
    ["Pod", "Smallest deployable unit: one or more containers with shared storage and network."],
    ["ReplicaSet", "Keeps the desired number of identical pods running; created by a Deployment."],
    ["Deployment", "Manages stateless replicated pods and rolling updates."],
    ["StatefulSet", "Manages stateful pods with stable names and their own PVCs."],
    ["DaemonSet", "Runs one pod on every (matching) node."],
    ["Job / CronJob", "Run-to-completion task once / on a schedule."],
    ["PV / PVC / StorageClass", "Cluster storage / a request for storage / template for dynamic provisioning."],
    ["Service (ClusterIP, NodePort, LoadBalancer)", "Stable endpoint and load balancing for a set of pods; internal / node-port / cloud load balancer."],
    ["Headless service", "Service with clusterIP: None; gives each StatefulSet pod a stable DNS name."],
    ["Ingress", "HTTP(S) entry point routing by host/path to many Services; needs an ingress controller."],
    ["Rolling update / rollback", "Gradual replacement of pods with zero downtime; kubectl rollout undo reverts."],
    ["Helm chart", "Packaged Kubernetes application templates, installed with Helm."]
  ]
},
{
  id: 4, pdf: "pdfs/it5080/lectures/lecture-04.pdf", pages: 23,
  title: "Automation with Ansible",
  desc: "Control and managed nodes, inventory, preparing hosts with SSH keys, ad-hoc commands, playbooks, plays, tasks and modules.",
  sections: [
    { h: "What Ansible is", items: [
      "Ansible automates the management of remote systems and controls their desired state – configuration, deployment, provisioning, updates and testing. Written in <b>Python</b>; configuration in <b>INI or YAML</b>.",
      "<b>Agentless:</b> nothing is installed on the managed nodes; the control node connects over <b>SSH</b> and runs modules with the node’s Python.",
      "Other features: many ready-made modules (custom ones can be added), human-readable self-documenting <b>playbooks</b>, <b>idempotent</b> tasks (running again changes nothing if the state is already correct)."
    ]},
    { h: "Ansible environment", items: [
      "<b>Control node</b> – the machine with Ansible installed; commands are issued here. <b>Managed nodes (hosts)</b> – remote systems Ansible controls. <b>Inventory</b> – the list of managed nodes, organised into groups, with variables.",
      "<b>Inventory INI:</b> <pre><code>[nginx]\n10.244.0.18\n10.244.0.19\n10.244.0.20\n[nginx:vars]\nansible_user=ansible</code></pre> YAML form uses <code>nginx: hosts: … vars: ansible_user: ansible</code>.",
      "<b>ansible.cfg</b> is read from, in order: <code>ANSIBLE_CONFIG</code> variable, <code>./ansible.cfg</code>, <code>~/.ansible.cfg</code>, <code>/etc/ansible/ansible.cfg</code> (first found wins). Example settings: <code>inventory</code>, <code>remote_user</code>, <code>private_key_file</code>."
    ]},
    { h: "Preparing the managed nodes", items: [
      "<b>Requirements of a managed node:</b> <b>Python</b> installed; <b>sshd</b> running and reachable; a user account for Ansible (e.g. <code>ansible</code>) with <b>sudo</b> (become root) privilege.",
      "<b>Key-based SSH without passwords:</b> on the control node <code>ssh-keygen -t rsa</code> creates a key pair; <code>ssh-copy-id ansible@10.244.0.18</code> copies the <b>public key</b> to each managed node (password needed just once).",
      "<b>Control-node connection mechanism:</b> SSH using the key; Ansible copies a small Python module, runs it and removes it."
    ]},
    { h: "Ad-hoc commands", items: [
      "<code>ansible nginx --list-hosts</code> – list hosts in a group; <code>ansible nginx -m ping</code> – test connectivity (<code>SUCCESS … pong</code> or <code>UNREACHABLE</code>); <code>ansible nginx -m setup</code> – gather facts; <code>ansible nginx -m command -a 'uptime'</code> – run a command."
    ]},
    { h: "Playbooks, plays, tasks and modules", items: [
      "A <b>playbook</b> is a YAML file of one or more <b>plays</b>. A <b>play</b> maps a group of <b>hosts</b> to a list of <b>tasks</b>. A <b>task</b> calls one <b>module</b> (e.g. <code>apt</code>, <code>template</code>, <code>service</code>, <code>command</code>) with arguments.",
      "<pre><code>- name: web\n  hosts: webservers\n  gather_facts: true\n  become: yes\n  tasks:\n  - name: latest nginx package is present\n    apt:\n      name: nginx\n      state: latest\n  - name: index file is present\n    template:\n      src: files/index.html\n      dest: /var/www/html/\n  - name: nginx service is started\n    command:\n      cmd: service nginx start\n      creates: /var/run/nginx.pid</code></pre>",
      "<b>become: yes</b> – escalate privileges (run the tasks as root via sudo). <b>gather_facts: true</b> – collect system facts first; useful but <b>not essential</b>.",
      "<b>creates: /var/run/nginx.pid</b> – the command runs only if that file does not exist; if the file exists Ansible knows the service is already running and skips the command (idempotence).",
      "<b>Playbook with two plays</b> (web on <code>webservers</code>, db on <code>dbservers</code>). To ensure the latest mariadb and a started service on the db hosts:",
      "<pre><code>- name: db\n  hosts: dbservers\n  become: yes\n  tasks:\n  - name: latest mariadb is present\n    apt:\n      name: mariadb-server\n      state: latest\n  - name: mariadb is started\n    service:\n      name: mariadb\n      state: started</code></pre>"
    ]},
    { h: "Running a playbook and reading output", items: [
      "<code>ansible-playbook nginx.yaml</code>; add <code>-K</code> to be asked for the sudo (become) password.",
      "Task results: <b>ok (green)</b> – already in the desired state, no change; <b>changed (yellow/orange)</b> – the task changed something; <b>failed / unreachable (red)</b>. Running the playbook a second time shows tasks as <b>ok</b>.",
      "So for an <code>apt</code> task when the package is already installed the result is <b>ok – green</b> (no change)."
    ]}
  ],
  terms: [
    ["Control node", "Machine where Ansible is installed and commands are run."],
    ["Managed node / host", "Remote system managed by Ansible."],
    ["Inventory", "List (groups and variables) of managed nodes."],
    ["Agentless", "No agent software on managed nodes; uses SSH and Python."],
    ["ssh-keygen / ssh-copy-id", "Create a key pair / copy the public key to a managed node for passwordless login."],
    ["Playbook", "YAML file describing plays to run."],
    ["Play", "Maps a host group to a set of tasks."],
    ["Task", "A single action that calls a module."],
    ["Module", "Reusable unit of work (apt, service, template, command...)."],
    ["become: yes", "Run tasks with elevated privileges (sudo / root)."],
    ["gather_facts", "Collect information about the managed node before running tasks."],
    ["Idempotent", "Re-running gives the same state with no extra changes (ok instead of changed)."],
    ["ok / changed / failed", "Green no change / yellow change made / red error."]
  ]
},
{
  id: 5, pdf: "pdfs/it5080/lectures/lecture-05.pdf", pages: 75,
  title: "Version Control with Git",
  desc: "Version control concepts, Git’s snapshot model, the three areas, essential commands, branching, merging, rebasing, stashing, remotes, forks and pull requests.",
  sections: [
    { h: "Version control and Git", items: [
      "<b>Version control</b> records changes to files over time so you can recall versions, revert, compare, and see who changed what and why. It enables concurrent collaboration and gives a historical record.",
      "<b>Centralised VCS:</b> one server holds the version database; developers check out/in. <b>Distributed VCS (Git):</b> every clone is a <b>full copy including history</b>, so any clone can restore the server.",
      "<b>Git thinks in snapshots</b> (not deltas): each commit stores a snapshot of the project, linking to the previous identical files if unchanged. Git is mostly <b>local</b>, <b>checksummed</b> (SHA-1; tamper-evident) and mostly <b>only adds data</b> (hard to lose work)."
    ]},
    { h: "Workspace, staging area and repository", items: [
      "<b>Working tree (workspace)</b> – the files you edit. <b>Staging area (index)</b> – files marked for the next commit. <b>Git directory (<code>.git</code>)</b> – the repository database (compressed snapshots, metadata).",
      "<b>File states:</b> <b>untracked</b> (new, not in the last snapshot) → <code>git add</code> → <b>staged</b> → <code>git commit</code> → <b>unmodified/committed</b> → edit → <b>modified</b> → <code>git add</code> → staged. <code>git restore --staged</code> unstages; <code>git restore file</code> discards modifications; <code>git rm</code> removes.",
      "<pre>untracked --git add--> staged --git commit--> committed(unmodified)\n                                  |                      |\n                       git restore --staged         edit file\n                                  v                      v\n                              modified <----------------+\n   modified --git add--> staged     modified --git restore--> unmodified</pre>"
    ]},
    { h: "Setup and everyday commands", items: [
      "<b>Config</b> (three levels: system, per-user <code>--global</code>, per-repository <code>.git/config</code>; the narrower level overrides): <code>git config --global user.name \"John Doe\"</code>, <code>git config --global user.email john@example.com</code>, <code>git config --list</code>. A repository-local identity omits <code>--global</code>.",
      "<b>Create a repo:</b> <code>git init</code> (turn an existing directory into a repository) or <code>git clone URL</code> (copy an existing repository with its history).",
      "<code>git status</code> – state of files. <code>git add file</code> – stage. <code>git commit -m \"message\"</code> – record a snapshot (<code>-a</code> skips staging for tracked files). <code>git diff</code> – unstaged changes; <code>git diff --staged</code> – staged changes. <code>git log</code> (<code>--oneline</code>, <code>-n</code>, <code>--since</code>, <code>--author</code>, <code>--grep</code>) – history.",
      "<code>git rm file</code> (remove; <code>--cached</code> keeps it in the working tree), <code>git mv old new</code> (rename). <code>.gitignore</code> lists patterns Git should ignore.",
      "<b>Undoing:</b> <code>git commit --amend</code> (redo last commit), <code>git restore --staged file</code> (unstage), <code>git restore file</code> (discard changes), <code>git revert &lt;commit&gt;</code> (new commit that undoes an old one – safe, history kept), <code>git reset --mixed HEAD~2</code> (remove the last 2 commits but keep the changes in the working directory), <code>--soft</code> keeps them staged, <code>--hard</code> discards them."
    ]},
    { h: "Remotes", items: [
      "<code>git remote -v</code>, <code>git remote add name URL</code>; <code>origin</code> is the default name of the server you cloned from.",
      "<b>fetch vs pull:</b> <code>git fetch</code> downloads new commits into the local repository and remote-tracking branches (<code>origin/main</code>) but does <b>not</b> change your working tree. <code>git pull</code> = fetch <b>then merge</b> into your current branch. <code>git push remote branch</code> uploads your commits.",
      "<b>Tags</b> mark release points: <code>git tag -a v0.1 -m \"Version 0.1\"</code>, <code>git tag</code>, <code>git show v0.1</code>."
    ]},
    { h: "Branching and merging", items: [
      "A <b>branch</b> is just a movable <b>pointer to a commit</b> – lightweight and instant. <b>HEAD</b> points to the current branch.",
      "<code>git branch testing</code> (create), <code>git checkout testing</code> or <code>git switch testing</code> (switch), <code>git checkout -b testing</code> or <code>git switch -c testing</code> (<b>create and switch in one command</b>), <code>git branch -d name</code> (delete). To create <code>feature_8990</code> with the content of <code>dev</code> while on dev: <code>git checkout -b feature_8990</code>.",
      "<b>Merge:</b> <code>git merge branch</code>. A <b>fast-forward</b> merge just moves the pointer; otherwise Git creates a <b>merge commit</b> with two parents. <b>Merge conflict:</b> the same part of the same file changed in both branches – Git stops; fix the file manually, <code>git add</code> it and commit.",
      "<b>Rebase</b> replays the commits of one branch on top of another: <code>git checkout experiment; git rebase master</code>, then <code>git merge experiment</code> (fast-forward). <b>Rebase vs merge:</b> the end result is the same, but rebasing gives a <b>clean, linear history</b> without merge commits or branch tangles. It <b>rewrites history</b>, so <b>never rebase commits already shared</b> outside your repository.",
      "<b>Stash:</b> <code>git stash</code> saves uncommitted work on a stack so you can switch branches; <code>git stash list</code>, <code>git stash apply</code> restores it."
    ]},
    { h: "Collaboration: forks and pull requests", items: [
      "<b>Fork</b> = your own writable server-side copy of someone else’s repository. <b>Use cases:</b> (1) contribute to a project where you have no write access, then send a pull request; (2) take a project in your own direction or customise it; (3) experiment safely, or keep your own copy/backup of the code base.",
      "Typical flow: clone → <code>git checkout -b featureA</code> → work and commit → fork on the Git host → <code>git remote add myfork URL</code> → <code>git push -u myfork featureA</code> → open a <b>pull request</b> (or <code>git request-pull</code>) so maintainers can review and merge.",
      "<b>Best practice to add a finished feature branch (e.g. <code>feature_otp_service</code>) to the <code>Production</code> branch:</b> open a <b>pull request (merge request)</b> from the feature branch into Production so the change is peer-reviewed and passes automated CI checks, then merge it (optionally after rebasing for a clean history). Benefits: code review and quality control, traceability and discussion, protected release branch, CI tests, easy revert, no direct pushes to production."
    ]}
  ],
  terms: [
    ["Version control", "System that records changes to files so versions can be recalled."],
    ["Distributed VCS", "Every clone holds the whole repository history."],
    ["Snapshot", "Git stores each commit as a snapshot of the project, not as deltas."],
    ["Working tree / staging area / .git", "Files you edit / files queued for next commit / repository database."],
    ["Commit", "A recorded snapshot with message, author and parent."],
    ["git init vs git clone", "Start a repo in an existing folder / copy an existing repository."],
    ["git add", "Stage changes for the next commit."],
    ["git status", "Shows file states (untracked, modified, staged)."],
    ["git diff / diff --staged", "Show unstaged changes / staged changes."],
    ["git log --oneline", "Condensed commit history."],
    ["git restore", "Discard working-tree changes (or unstage with --staged)."],
    ["git revert", "Create a new commit that undoes an earlier one."],
    ["git reset --mixed HEAD~2", "Remove last 2 commits but keep changes in the working directory."],
    ["git fetch vs git pull", "Fetch downloads only; pull = fetch + merge."],
    ["Branch / HEAD", "Pointer to a commit / pointer to the current branch."],
    ["git checkout -b name", "Create a branch and switch to it in one command."],
    ["Merge commit", "Commit with two parents created when merging diverged branches."],
    ["Merge conflict", "Same lines changed differently in two branches; must be resolved manually."],
    ["Rebase", "Replay commits onto another base for a linear history (rewrites history)."],
    ["Stash", "Shelve uncommitted changes temporarily."],
    ["Fork / pull request", "Your own copy of a repo / request that maintainers merge your work."]
  ]
},
{
  id: 6, pdf: "pdfs/it5080/lectures/lecture-06.pdf", pages: 34,
  title: "CI/CD Automation with Jenkins",
  desc: "Jenkins installation, jobs and job types, controller/agent architecture, agent types, labels and executors, freestyle jobs and pipelines as code (Jenkinsfile).",
  sections: [
    { h: "What Jenkins is", items: [
      "<b>Jenkins</b> is an open-source <b>automation server</b> that automates repetitive tasks and integrates software development and delivery (CI/CD), giving consistent, repeatable delivery with less manual effort. It is vendor-agnostic and runs on-premises or in any cloud.",
      "Install as a container: <code>docker run -d --name jenkins -v jenkins_home:/var/jenkins_home -p 8080:8080 -p 50000:50000 --restart=on-failure jenkins/jenkins:lts</code> (8080 web UI, 50000 agent connections). Open <code>http://localhost:8080</code>, enter the <b>initial administrator password</b> (container log or file), install suggested plugins and create an admin user.",
      "<b>Plugins</b> extend Jenkins: Git, Docker, Pipeline, Slack, Email, etc."
    ]},
    { h: "Jobs and job types", items: [
      "A <b>Job</b> (project) is a blueprint of build configuration (steps, SCM settings, environment, artifacts). Each execution creates a <b>Build</b>. Jobs run manually, on a schedule (cron), or on events such as commits.",
      "<b>Types:</b> <b>Freestyle</b> (GUI-configured, simple), <b>Pipeline</b> (code in a Jenkinsfile), <b>Multi-configuration</b> (same job across several configurations/OSs), <b>Folder</b>, <b>Multibranch pipeline</b> (one pipeline per branch detected in a repository) and <b>Organization folder</b> (scans repositories)."
    ]},
    { h: "Architecture: controller and agents", items: [
      "Jenkins uses a <b>distributed controller–agent (master–slave)</b> architecture.",
      "<b>Master / controller responsibilities:</b> <b>job scheduling</b>; the <b>web interface</b> for configuring and managing Jenkins (plugins, credentials, security, build history); <b>coordinating and distributing</b> jobs to available build agents. It can run builds itself only in small setups – <b>not recommended for security</b>.",
      "<b>Build agents (slaves)</b> execute the build jobs: distributed and parallel execution, dedicated resources (physical, VM, cloud), dynamically provisioned in the cloud, any OS, isolated from each other (one failure does not take down Jenkins).",
      "<b>Agent types:</b> <b>Master node</b>; <b>dedicated build agents</b> (always-on machines assigned to Jenkins, fixed capacity, manually maintained); <b>cloud-based agents</b> (provisioned <b>on demand</b> to handle peaks and terminated after the job – elastic, pay-per-use, optimises resources, but have start-up time).",
      "<b>Connecting dedicated agents:</b> <b>Inbound agent</b> – the <b>agent connects to the controller</b> (launch method “connect by running a command”); the controller listens on TCP port 50000 and the agent uses a shared secret; good behind firewalls/NAT. <b>SSH agent</b> – the <b>controller connects to the agent over SSH</b> using a private key stored as a Jenkins credential, with the public key on the agent.",
      "<b>Agent labels</b> are tags (e.g. <code>linux</code>, <code>gpu</code>, <code>windows</code>, <code>dev</code>) that categorise agents by capability, hardware or environment. Jenkins uses them to <b>decide where a job runs</b> and which agents can execute certain steps. Labels combine with <code>&amp;&amp;</code>, <code>||</code>, <code>!</code> (e.g. <code>linux &amp;&amp; gpu</code>).",
      "<b>Executor</b> = one execution slot on an agent (default 1); the number of executors sets how many builds run at once – best practice: match it to the number of CPUs."
    ]},
    { h: "Freestyle jobs", items: [
      "GUI-based, simple jobs: build steps (shell/batch, Make, Maven, Gradle), <b>build triggers</b> (manual, periodic cron, SCM change, after another job), <b>post-build actions</b> (archive artifacts, email, trigger jobs, publish JUnit reports), and <b>parameterised builds</b>."
    ]},
    { h: "Pipelines and the Jenkinsfile", items: [
      "A <b>Pipeline</b> defines CI/CD <b>as code</b> in a <b>Jenkinsfile</b> (Groovy-based DSL) stored with the source code. It has <b>stages</b> (Build, Test, Deploy) containing <b>steps</b> (single actions).",
      "<b>Declarative</b> (structured, simpler) vs <b>Scripted</b> (full Groovy, more flexible, harder to maintain).",
      "<b>Advantages of a Jenkinsfile:</b> (1) <b>version control</b> – pipeline changes are tracked, reviewed and rolled back with the code; (2) <b>reproducible and portable</b> – same pipeline on any Jenkins/agent, no GUI clicking; (3) <b>durable and resumable</b>, supports <b>parallel</b> stages, error handling, notifications and plugins; (4) auto-detect per branch with multibranch pipelines.",
      "<pre><code>pipeline {\n  agent any\n  stages {\n    stage('Build') {\n      steps { echo 'Building...' }\n    }\n    stage('Test') {\n      steps { echo 'Testing...' }\n    }\n    stage('Deploy') {\n      steps {\n        retry(3) {\n          sh './flakey-deploy.sh'\n        }\n        timeout(time: 3, unit: 'MINUTES') {\n          sh './health-check.sh'\n        }\n      }\n    }\n  }\n  post {\n    always { echo 'This will always run' }\n    success { echo 'Build was successful!' }\n    failure { echo 'Build failed.' }\n  }\n}</code></pre>",
      "<b>Keywords:</b> <code>agent</code> (where to run: <code>any</code>, a label, a container), <code>stages</code>/<code>stage</code>, <code>steps</code>, <code>retry(n)</code> (re-run a flaky step n times), <code>timeout(time:, unit:)</code> (abort after a time), <code>post</code> with <code>always</code>, <code>success</code>, <code>failure</code>, <code>unstable</code>, <code>changed</code> for clean-up and notifications.",
      "<b>Pipeline for the 2025 question</b> (checkout, build, test, deploy, post actions):",
      "<pre><code>pipeline {\n  agent any\n  stages {\n    stage('Checkout') { steps { sh 'git clone http://github.com/userxyz/project.git' } }\n    stage('Build')    { steps { sh 'cd project; make build' } }\n    stage('Test')     { steps { sh './run_tests.sh' } }\n    stage('Deploy')   { steps { sh './deploy.sh' } }\n  }\n  post {\n    success { echo 'Pipeline completed successfully!' }\n    failure { echo 'Pipeline failed!' }\n    always  { sh './cleanup.sh' }\n  }\n}</code></pre>"
    ]},
    { h: "Jenkins best practices", items: [
      "Use <b>Pipeline as Code</b> (Jenkinsfile in version control) rather than GUI-only jobs.",
      "<b>Do not run builds on the controller</b> – use dedicated or cloud agents (and labels) for security and scalability.",
      "Keep Jenkins and plugins <b>updated</b> and remove unused plugins; <b>secure</b> it (authentication, role-based access, credentials store – never hard-code secrets).",
      "<b>Back up</b> the Jenkins home (<code>jenkins_home</code> volume) and configuration; keep jobs small and fast; add <b>timeouts and retries</b>; archive artifacts and clean the workspace.",
      "Use multibranch pipelines, parallel stages, shared libraries and notifications (Slack/email) for fast feedback. <i>(List from the lecture plus common practice.)</i>",
      "<b>Hybrid / multi-cloud:</b> Jenkins is vendor-agnostic. Agents can run on-premises or in any cloud (inbound or SSH agents; cloud agents via EC2/Azure/Kubernetes plugins; container agents), and the same Jenkinsfile runs everywhere – so it supports a hybrid multi-cloud migration with minimal adaptation."
    ]}
  ],
  terms: [
    ["Jenkins", "Open-source automation server for CI/CD."],
    ["Job / Build", "Blueprint of tasks / one execution of a job."],
    ["Freestyle job", "Simple GUI-configured job."],
    ["Pipeline", "CI/CD defined as code in a Jenkinsfile."],
    ["Jenkinsfile", "Text file (Groovy DSL) holding the pipeline, stored with the code."],
    ["Declarative vs scripted", "Structured pipeline syntax vs full Groovy scripting."],
    ["Stage / step", "Logical phase of a pipeline / a single action inside it."],
    ["Controller (master)", "Schedules jobs, serves the UI and coordinates agents."],
    ["Agent (slave)", "Worker node that executes build jobs."],
    ["Dedicated vs cloud agent", "Fixed always-on machine vs on-demand agent created and terminated with the workload."],
    ["Inbound agent", "Agent initiates the connection to the controller (TCP 50000, secret)."],
    ["SSH agent", "Controller connects to the agent using SSH credentials."],
    ["Agent label", "Tag used to choose which agent runs a job."],
    ["Executor", "A slot that runs one build at a time on an agent."],
    ["post (always/success/failure)", "Pipeline section for actions after the run."],
    ["retry / timeout", "Re-run a step n times / abort it after a time limit."]
  ]
},
{
  id: 7, pdf: "pdfs/it5080/lectures/lecture-07.pdf", pages: 21,
  title: "Serverless Computing and AWS Lambda",
  desc: "What serverless means, its characteristics, offerings, AWS Lambda concepts (function, event, trigger, runtime, layers, qualifiers) and writing Lambda functions.",
  sections: [
    { h: "What is serverless?", items: [
      "<b>Serverless computing (Function as a Service, FaaS)</b> lets developers build and run code (functions) <b>without provisioning or managing servers</b>. Servers still exist, but the cloud provider manages them (usually as containers) and they are invisible to the developer.",
      "The provider handles provisioning, scaling, OS updates and patches, security management, capacity planning and monitoring.",
      "<b>Characteristics:</b> <b>no server management</b>; <b>event-driven</b> (functions run only when triggered); <b>automatic scaling</b> with demand; <b>pay-as-you-go</b> (billed for actual execution time, nothing when idle). <b>Benefits:</b> scalability, cost efficiency, lower operational overhead, rapid development.",
      "<b>Difference from other XaaS:</b> IaaS gives you VMs and you manage OS/runtime; PaaS gives a platform; CaaS runs containers you supply; <b>FaaS gives only functions – the least you manage</b>, billed per execution rather than for reserved capacity."
    ]},
    { h: "Offerings", items: [
      "<b>AWS Lambda</b>, <b>Azure Functions</b>, IBM Cloud Functions (Apache OpenWhisk), Google Cloud Run functions, Firebase Cloud Functions, Oracle Functions.",
      "<b>On-premises / open source:</b> OpenFaaS, Fission, Apache OpenWhisk (data sovereignty, customisation, hybrid cloud)."
    ]},
    { h: "AWS Lambda concepts", items: [
      "<b>Function</b> – your code, invoked to process events. <b>Event</b> – JSON data passed to the function (converted to an object/dictionary). <b>Trigger</b> – a resource or configuration that <b>invokes</b> the function: an object put in an S3 bucket, a code commit, an IoT device sending data, a message in a queue, a log entry, a database event, an HTTP request.",
      "<b>Execution environment</b> – secure isolated environment (container/pod) that runs the function. <b>Runtime</b> – the <b>language-specific environment</b> (e.g. <code>python3.13</code>, <code>nodejs22.x</code>) inside it; must match the function language.",
      "<b>Layers</b> – zip archives with libraries/dependencies shared between functions (extracted to <code>/opt</code>; up to five per function). <b>Versions and aliases (qualifiers)</b> – immutable code snapshots and movable pointers (e.g. BLUE). <b>Destinations</b> – where results of failed/successful async invocations go. <b>Environment variables</b>, <b>container images</b>, <b>function URLs</b> (dedicated HTTPS endpoint), concurrency controls, code signing, private networking, EFS access.",
      "<b>Examples:</b> Function = a Python <code>lambda_handler</code> that calculates an area; Event = <code>{\"length\": 15, \"width\": 12}</code>; Trigger = an HTTP request to the function URL / API Gateway, or an S3 upload."
    ]},
    { h: "Writing a Lambda function (Python)", items: [
      "Steps: log in to the AWS console → Lambda → Create function (name, runtime, architecture) → write code → create a test event → test/invoke → add a trigger (function URL or API Gateway) → test with curl; logs go to CloudWatch.",
      "<b>Volume of a box</b> – event contains <code>length</code>, <code>width</code>, <code>height</code> (JSON) and the function returns the volume as JSON:",
      "<pre><code>import json\n\ndef lambda_handler(event, context):\n    length = event[\"length\"]\n    width = event[\"width\"]\n    height = event[\"height\"]\n    volume = length * width * height\n    return json.dumps({\"volume\": volume})</code></pre>",
      "If invoked through an <b>HTTP URL</b> the JSON arrives as a string in <code>event[\"body\"]</code>, so first parse it: <code>body = json.loads(event[\"body\"])</code>, and return <code>{'statusCode': 200, 'body': json.dumps({'volume': volume})}</code>."
    ]},
    { h: "AWS services for common workloads (2023 exam question – extra to the slides)", items: [
      "<b>Single container, runs only when a request arrives, several API endpoints:</b> <b>Amazon API Gateway + AWS Lambda</b> (Lambda supports container images; serverless, pay per request, no servers). Alternative: AWS App Runner.",
      "<b>Python app (not a container), high computational power, always running:</b> <b>Amazon EC2 compute-optimised instances</b> (e.g. C-family) with Auto Scaling – or <b>AWS Elastic Beanstalk</b> to reduce management overhead (it provisions EC2, scaling and load balancing for you).",
      "<b>Static website with NodeJS functions run on a button click:</b> <b>Amazon S3 + CloudFront</b> for the static site, <b>AWS Lambda (Node.js) behind API Gateway or a function URL</b> for the functions; <b>AWS Amplify</b> packages hosting and functions with least management.",
      "<b>Locally hosted Git repository and Jenkins CI/CD, reduce management:</b> managed pipeline services – <b>AWS CodeCommit</b> (or GitHub) for Git, <b>AWS CodeBuild</b>, <b>CodePipeline</b>, <b>CodeDeploy</b> – no servers to patch; or run Jenkins on ECS/Fargate.",
      "<b>Fewer than 10 containers with some APIs, no Kubernetes learning curve:</b> <b>Amazon ECS with AWS Fargate</b> (serverless containers, images in ECR) behind an <b>Application Load Balancer</b>."
    ]}
  ],
  terms: [
    ["Serverless / FaaS", "Run functions without managing servers; provider handles infrastructure."],
    ["Event-driven", "Functions run only in response to an event."],
    ["Pay-as-you-go", "Billed only for execution time actually used."],
    ["AWS Lambda", "AWS's serverless compute service."],
    ["Function", "The code that Lambda runs (e.g. lambda_handler)."],
    ["Event (Lambda)", "JSON data passed to the function."],
    ["Trigger", "Resource or configuration that invokes the function (S3 upload, HTTP request, queue message)."],
    ["Execution environment", "Isolated container-like environment that runs the function."],
    ["Runtime", "Language-specific environment, e.g. python3.13."],
    ["Layer", "Zip of shared libraries/dependencies attached to functions."],
    ["Version / alias", "Immutable code snapshot / pointer to a version."],
    ["Destination", "Target for the result of an asynchronous invocation."],
    ["Function URL", "Dedicated HTTPS endpoint for a Lambda function."],
    ["OpenFaaS / Fission / OpenWhisk", "Open-source serverless platforms (on-premises capable)."]
  ]
},
{
  id: 8, pdf: "pdfs/it5080/lectures/lecture-08.pdf", pages: 46,
  title: "Web Automation with Selenium",
  desc: "Selenium components (WebDriver, IDE, Grid), writing Python scripts, locators, waiting strategies, interactions and running tests on a Grid.",
  sections: [
    { h: "What is Selenium?", items: [
      "<b>Selenium</b> is an umbrella project of tools and libraries that <b>automate and control web browsers</b>, emulating user actions: typing text, selecting values, ticking boxes, clicking links, moving the mouse, running JavaScript. Used for automated web testing in the Test phase of DevOps.",
      "<b>Three main components:</b>",
      "<b>WebDriver</b> – language bindings (Python, Java, JavaScript…) and browser drivers that drive a real browser natively, <b>as a real user would</b>; non-intrusive (tests the same app you ship); a W3C Recommendation. <b>IDE</b> – a Chrome/Firefox/Edge extension that <b>records</b> user actions as Selenium commands, lets you replay them and export code; excellent for learning and for building a script <b>without coding</b>. <b>Grid</b> – runs WebDriver tests <b>in parallel on multiple machines, browsers and operating systems</b> (hub + nodes)."
    ]},
    { h: "Setting up and a first script (Python)", items: [
      "Install in a virtual environment: <code>python -m venv selenv</code>, activate it, <code>pip install selenium</code> (and <code>pytest</code>). Chrome needs a matching <b>chromedriver</b>; Edge uses edgedriver, Firefox geckodriver, Safari <code>safaridriver --enable</code>.",
      "<pre><code>from selenium import webdriver\nfrom selenium.webdriver.common.by import By\n\ndriver = webdriver.Chrome()\ndriver.get(\"https://www.selenium.dev/selenium/web/web-form.html\")\ndriver.implicitly_wait(0.5)\nassert driver.title == \"Web form\"\ntext_box = driver.find_element(by=By.NAME, value=\"my-text\")\nsubmit = driver.find_element(by=By.CSS_SELECTOR, value=\"button\")\ntext_box.send_keys(\"Selenium\")\nsubmit.click()\nmessage = driver.find_element(by=By.ID, value=\"message\")\nassert message.text == \"Received!\"\ndriver.quit()</code></pre>"
    ]},
    { h: "Waiting strategies", items: [
      "<b>Why waits are needed:</b> pages load dynamically; if the script runs before the element exists or is displayed, it fails. A fixed <code>time.sleep()</code> is unreliable (too short → fails, too long → slow).",
      "<b>Implicit wait:</b> <code>driver.implicitly_wait(2)</code> – a <b>global</b> setting; every element lookup polls for up to 2 seconds and returns as soon as the element is found. Default 0.",
      "<b>Explicit wait:</b> wait for a <b>specific condition</b> with a timeout: <code>WebDriverWait(driver, timeout=2).until(lambda d: element.is_displayed())</code> or <code>expected_conditions</code>. Most precise; raises a timeout error if the condition is never met. (Fluent waits add polling interval and ignored exceptions.)"
    ]},
    { h: "Locators and finding elements", items: [
      "<code>By.ID</code> (unique id), <code>By.NAME</code>, <code>By.CLASS_NAME</code> (no compound class names), <code>By.CSS_SELECTOR</code> (<code>#id</code>, <code>[attr=value]</code>, <code>button</code>), <code>By.TAG_NAME</code>, <code>By.LINK_TEXT</code>, <code>By.PARTIAL_LINK_TEXT</code>, <code>By.XPATH</code> (absolute <code>/html/body/…</code> or relative <code>//input[@value='f']</code>).",
      "<b>Relative locators:</b> <code>locate_with(By.TAG_NAME, \"input\").above/below/to_left_of/to_right_of/near(...)</code>, chainable.",
      "<code>find_element</code> returns the first match; <code>find_elements</code> returns a list; you can search inside another element to narrow scope."
    ]},
    { h: "Interacting with elements and the browser", items: [
      "<code>click()</code>, <code>clear()</code>, <code>send_keys(\"text\")</code>, <code>element.text</code>, <code>get_attribute()</code>; browser: <code>back()</code>, <code>forward()</code>, <code>refresh()</code>, <code>driver.title</code>, <code>driver.quit()</code>.",
      "<b>File upload:</b> send the file path with <code>send_keys</code> to the <code>input[type=file]</code> element. <b>Actions API:</b> <code>ActionChains(driver).move_to_element(el).click_and_hold().send_keys(\"abc\").perform()</code> for low-level input."
    ]},
    { h: "Exam-style script (2024 and 2025 questions)", items: [
      "<b>2024:</b> open <code>https://www.example.com/login.php</code>, type <code>admin</code> in the box named <code>username</code>, <code>top-secret</code> in the box with ID <code>passwd</code>, click the only <code>button</code>, assert the element with ID <code>message</code> has the text “Login successful”.",
      "<pre><code>from selenium import webdriver\nfrom selenium.webdriver.common.by import By\n\ndriver = webdriver.Chrome()\ndriver.get(\"https://www.example.com/login.php\")\ndriver.find_element(By.NAME, \"username\").send_keys(\"admin\")\ndriver.find_element(By.ID, \"passwd\").send_keys(\"top-secret\")\ndriver.find_element(By.TAG_NAME, \"button\").click()\nmsg = driver.find_element(By.ID, \"message\")\nassert msg.text == \"Login successful\"\ndriver.quit()</code></pre>",
      "<b>2025:</b> Chrome driver, open <code>https://example.com/login.html</code>, enter <code>user123</code> in ID <code>username</code>, <code>abc@123</code> in the box named <code>passwd</code>, click the <code>button</code>, wait 2 seconds and verify the title is “Dashboard”.",
      "<pre><code>from selenium import webdriver\nfrom selenium.webdriver.common.by import By\nfrom selenium.webdriver.support.ui import WebDriverWait\n\ndriver = webdriver.Chrome()\ndriver.get(\"https://example.com/login.html\")\ndriver.find_element(By.ID, \"username\").send_keys(\"user123\")\ndriver.find_element(By.NAME, \"passwd\").send_keys(\"abc@123\")\ndriver.find_element(By.TAG_NAME, \"button\").click()\nWebDriverWait(driver, 2).until(lambda d: d.title == \"Dashboard\")\nassert driver.title == \"Dashboard\"\ndriver.quit()</code></pre>"
    ]},
    { h: "Selenium Grid", items: [
      "Grid routes WebDriver commands from the client to remote browser instances so tests run <b>in parallel on many machines with different browser/OS combinations</b> (e.g. Chrome and Firefox on Linux, Windows and macOS).",
      "<b>Components:</b> <b>Router</b> (sends requests to the queue or the node running a session), <b>Distributor</b> (assigns queued session requests to nodes with matching capabilities), <b>New Session Queue</b>, <b>Session Map</b>, <b>Event Bus</b>, and <b>Nodes</b> (browser instances that register with the distributor). Set up quickly with Docker Compose (docker-selenium); hub UI on port 4444.",
      "Run on the grid: <code>webdriver.Remote(command_executor=\"http://grid-hub-ip:4444\", options=options)</code>."
    ]}
  ],
  terms: [
    ["Selenium", "Tools and libraries for automating web browsers."],
    ["Selenium WebDriver", "API and drivers that control a browser like a real user."],
    ["Selenium IDE", "Browser extension that records and replays actions; can export code."],
    ["Selenium Grid", "Runs tests in parallel on many machines/browsers/OSs."],
    ["Locator", "Strategy to find an element: ID, NAME, CSS, XPATH, LINK_TEXT..."],
    ["find_element / find_elements", "Return the first match / a list of all matches."],
    ["Relative locator", "Find elements by position: above, below, left, right, near."],
    ["Implicit wait", "Global polling timeout applied to every element lookup."],
    ["Explicit wait", "Wait for a specific condition up to a timeout (WebDriverWait)."],
    ["send_keys / click", "Type into an element / click it."],
    ["Grid Hub components", "Router, Distributor, Session Queue, Session Map, Event Bus, Nodes."],
    ["webdriver.Remote", "Connects a script to a Selenium Grid hub."]
  ]
}
];
