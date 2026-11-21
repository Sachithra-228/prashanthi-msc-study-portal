/* IT5080 DevOps – written questions from the 2023, 2024 and 2025 final examinations, with model answers.
   Each paper: 5 questions x 20 marks, 3 hours. Parts of the 2023/2024 scans were hard to read; those are marked in the question text. */
(function () {
  var w = [];
  function add(paper, no, marks, topic, q, a) { w.push({ id: "dw" + (w.length + 1), paper: paper, no: no, marks: marks, topic: topic, q: q, a: a }); }
  var P25 = "Past Paper 2025", P24 = "Past Paper 2024", P23 = "Past Paper 2023";

  /* =================== 2025 =================== */
  add(P25, "Q1(a)", 2, "Containers: portability and scalability",
    `Explain how containerization improves portability and scalability of applications compared to traditional deployment models.`,
    `<ul><li><b>Portability:</b> a container image packages the application <i>with all its dependencies and runtime</i>, so it behaves the same on a laptop, a test server or any cloud that has a container engine (“build once, run anywhere”). Traditional deployments depend on the OS version and libraries installed on each host, which causes “it works on my machine” problems.</li><li><b>Scalability:</b> containers are lightweight and share the host kernel, so new instances start in seconds and many run on one host. Identical containers can be replicated horizontally (and automatically by an orchestrator such as Kubernetes), and each microservice can be scaled independently – unlike heavy VMs or manually installed servers.</li></ul>`);
  add(P25, "Q1(b)", 3, "Docker architecture",
    `Describe the role of the following components in the Docker architecture: I. Docker Daemon II. Docker CLI III. Docker Registry.`,
    `<ul><li><b>Docker daemon (dockerd):</b> the background service that does the work – builds images and creates, runs and manages containers, networks and volumes.</li><li><b>Docker CLI (client):</b> the <code>docker</code> command the user types; it sends the commands to the daemon through a REST API (UNIX socket or network).</li><li><b>Docker registry:</b> a server that stores and distributes images (Docker Hub is the default public registry; private registries are possible). <code>pull</code> downloads from it and <code>push</code> uploads to it.</li></ul>`);
  add(P25, "Q1(c)", 5, "Docker commands explained",
    `Explain what happens when the following commands are executed:<br>I. <code>docker build -t userxyz/myapp:1.5 .</code><br>II. <code>docker run -d -p 8080:80 --name webapp userxyz/myapp:1.0</code><br>III. <code>docker logs webapp --follow</code><br>IV. <code>docker exec -it webapp /bin/bash</code>`,
    `<ol><li><b>build:</b> the client sends the build context (current directory <code>.</code>) to the daemon, which follows the <code>Dockerfile</code> instruction by instruction (one layer each) and tags the resulting image <code>userxyz/myapp:1.5</code> (repository userxyz/myapp, tag 1.5) in the local image store.</li><li><b>run:</b> creates a container from image <code>userxyz/myapp:1.0</code> (pulling it first if it is not local), starts it <b>detached</b> in the background (<code>-d</code>), maps <b>host port 8080 to container port 80</b> (<code>-p</code>) and names it <code>webapp</code>.</li><li><b>logs --follow:</b> prints the container’s stdout/stderr logs and keeps streaming new lines (like <code>tail -f</code>) until you press Ctrl+C.</li><li><b>exec -it:</b> runs <code>/bin/bash</code> inside the running container with an interactive terminal (<code>-i</code> keep stdin open, <code>-t</code> allocate a TTY), giving a shell for troubleshooting; exiting the shell does not stop the container.</li></ol>`);
  add(P25, "Q1(d)", 2, "Docker Compose advantages",
    `Explain two advantages of using Docker Compose over using individual docker run commands for each service separately.`,
    `<ol><li><b>One declarative file for the whole application</b> (services, ports, volumes, environment, secrets, dependencies) that can be version-controlled and shared – instead of many long, error-prone <code>docker run</code> commands.</li><li><b>One command to manage everything</b> – <code>docker compose up -d</code> / <code>down</code> creates or removes all containers together, with a default network (services find each other by name) and start-up order via <code>depends_on</code>. It also makes it easy to create and destroy repeatable test environments.</li></ol>`);
  add(P25, "Q1(e)–(f)", 8, "Compose file and secrets",
    `(e) Write a Docker Compose file that runs two services: a <b>web</b> service using image nginx:1.27 and exposing port 8080, and a <b>db</b> service using image mariadb:11 with the environment variable MYSQL_USER_PASSWORD set to TopSecret. [5]<br>(f) Show how you would modify the YAML to use Docker Secrets instead of the environment variable. [3]`,
    `<h5>(e)</h5><pre><code>services:
  web:
    image: nginx:1.27
    ports:
      - "8080:80"
  db:
    image: mariadb:11
    environment:
      - MYSQL_USER_PASSWORD=TopSecret</code></pre><h5>(f) Using a secret</h5><pre><code>services:
  web:
    image: nginx:1.27
    ports:
      - "8080:80"
  db:
    image: mariadb:11
    environment:
      - MYSQL_USER_PASSWORD_FILE=/run/secrets/db_password
    secrets:
      - db_password
secrets:
  db_password:
    file: db_password.txt</code></pre><p>Steps: (1) put the password in <code>db_password.txt</code>; (2) declare it in the top-level <code>secrets:</code>; (3) reference it in the service’s <code>secrets:</code>; (4) replace the clear-text variable by a <code>_FILE</code> variable that points to <code>/run/secrets/db_password</code>.</p>`);
  add(P25, "Q2(a)–(b)", 5, "Kubernetes worker components; pod identity",
    `(a) Describe the roles of the components present in a slave (worker) node in a Kubernetes cluster and the component(s) in the master node they communicate with. [3]<br>(b) Describe how the pod identity (name) differs in ReplicaSets and StatefulSets. [2]`,
    `<h5>(a)</h5><ul><li><b>kubelet</b> – agent that receives pod specifications from the <b>API server</b> (master), makes sure the containers run through the container runtime and reports node/pod status back to the API server.</li><li><b>kube-proxy</b> – network proxy that implements Services; it watches the <b>API server</b> for Services/Endpoints and keeps the node’s forwarding rules up to date for load balancing.</li><li><b>Container runtime</b> (containerd/Docker) – actually pulls images and runs the containers; it is driven by the kubelet.</li></ul><h5>(b)</h5><ul><li><b>ReplicaSet:</b> pod names are the ReplicaSet name plus a <b>random suffix</b> (<code>nginx-dpl-cbdccf466-fh4qq</code>); a replacement pod gets a <b>different</b> random name – pods are interchangeable.</li><li><b>StatefulSet:</b> pods have a <b>stable, ordinal name</b> (<code>nginx-sts-0, -1, -2</code>); a replacement keeps the <b>same name</b> (and its own PVC), so identity is predictable.</li></ul>`);
  add(P25, "Q2(c)", 13, "StatefulSet YAML – objects, headless service, Deployment",
    `The YAML defines a StatefulSet <code>nginx-sts</code> with <code>replicas: 3</code>, image <code>nginx:1.28</code>, container port 80, a <code>volumeMounts</code> entry <code>varwww</code> at <code>/var/www</code> and <code>volumeClaimTemplates</code> requesting 100Mi with <code>ReadWriteOnce</code>.<br>I. What Kubernetes object types are created when this YAML is applied? Indicate the number of objects and other relevant details. [6]<br>II. Write YAML for a headless service which exposes this on port 30080. [4]<br>III. If <code>kind: StatefulSet</code> is changed to <code>kind: Deployment</code>, what sections of the YAML need to be removed? [3]`,
    `<h5>I. Objects created</h5><ul><li><b>1 StatefulSet</b> named <code>nginx-sts</code> (3 replicas).</li><li><b>3 Pods</b> with predictable names <code>nginx-sts-0</code>, <code>nginx-sts-1</code>, <code>nginx-sts-2</code>, each running <code>nginx:1.28</code>, port 80, with the volume mounted at <code>/var/www</code>. (No ReplicaSet is created.)</li><li><b>3 PersistentVolumeClaims</b> named <code>varwww-nginx-sts-0/1/2</code> (template name + pod name), each 100Mi, ReadWriteOnce – one per pod.</li><li><b>3 PersistentVolumes</b>, created <b>dynamically</b> by the default StorageClass to satisfy the claims (100Mi, RWO), each bound one-to-one to a PVC.</li></ul><h5>II. Headless service</h5><pre><code>apiVersion: v1
kind: Service
metadata:
  name: nginx-hl
spec:
  clusterIP: None        # headless
  selector:
    app: nginx
  ports:
  - name: web
    port: 30080
    targetPort: 80</code></pre><h5>III. Changing to a Deployment</h5><ul><li>Remove the <b><code>volumeClaimTemplates</code></b> section – it only exists for StatefulSets (and remove <code>serviceName</code> if present).</li><li>The <code>volumeMounts</code> entry then refers to a volume that no longer exists, so either remove it or define the volume under the pod’s <code>volumes:</code> (e.g. an existing PVC or <code>emptyDir</code>). All pods would then share that storage and have random names.</li></ul>`);
  add(P25, "Q2(d)", 2, "Helm",
    `State two advantages of using Helm charts to manage Kubernetes applications.`,
    `<ol><li><b>Simplified deployment:</b> a chart packages all the YAML (Deployments, Services, PVCs, Ingress, Secrets…) as templates, so a complete application is installed with one command (<code>helm install</code>) without writing the manifests.</li><li><b>Configurable, versioned and reusable:</b> defaults in <code>values.yaml</code> can be overridden per environment, releases can be upgraded and <b>rolled back</b>, dependencies are handled, and charts are shared through repositories such as Artifact Hub.</li></ol>`);
  add(P25, "Q3(a)", 5, "Preparing an Ansible environment",
    `Describe what tasks need to be performed to prepare an Ansible environment consisting of three managed nodes with IP addresses 10.144.20.10, 10.144.20.20 and 10.144.20.30. The name of the Ansible user needs to be set to <code>ansbiusr</code>. For each task, specify the commands you would use and the contents of any files you would create.`,
    `<ol><li><b>Install requirements on each managed node:</b> Python and the SSH server, and make sure sshd is running.<pre><code>sudo apt install -y python3 openssh-server
sudo systemctl enable --now ssh</code></pre></li><li><b>Create the Ansible user with sudo rights on each managed node:</b><pre><code>sudo adduser ansbiusr
echo "ansbiusr ALL=(ALL) NOPASSWD:ALL" | sudo tee /etc/sudoers.d/ansbiusr</code></pre></li><li><b>Install Ansible on the control node:</b> <code>sudo apt install -y ansible</code></li><li><b>Create an SSH key pair on the control node:</b> <code>ssh-keygen -t rsa</code></li><li><b>Copy the public key to every managed node</b> (password needed once):<pre><code>ssh-copy-id ansbiusr@10.144.20.10
ssh-copy-id ansbiusr@10.144.20.20
ssh-copy-id ansbiusr@10.144.20.30</code></pre></li><li><b>Create the inventory file</b> <code>~/ansible/inventory.ini</code>:<pre><code>[nodes]
10.144.20.10
10.144.20.20
10.144.20.30

[nodes:vars]
ansible_user=ansbiusr</code></pre></li><li><b>(Optional) <code>ansible.cfg</code>:</b><pre><code>[defaults]
inventory = ~/ansible/inventory.ini
remote_user = ansbiusr
private_key_file = ~/.ssh/id_rsa</code></pre></li><li><b>Test:</b> <code>ansible nodes --list-hosts</code> and <code>ansible nodes -m ping</code> – each host should answer <code>SUCCESS … pong</code>.</li></ol>`);
  add(P25, "Q3(b)", 5, "Reading an Ansible playbook",
    `The playbook has the play <code>name: web</code>, <code>hosts: webservers</code>, <code>gather_facts: true</code>, <code>become: yes</code> and three tasks: <code>apt</code> (nginx, state latest), <code>template</code> (files/index.html → /var/www/html/) and <code>command</code> (<code>cmd: service nginx start</code>, <code>creates: /var/run/nginx.pid</code>).<br>I. What does the line <code>become: yes</code> specify? [1]<br>II. Identify the plays and the host group each play runs on. [2]<br>III. What will the Ansible output be for the <code>apt</code> task if the package is already installed? What colour? [1]<br>IV. How does Ansible know if the nginx service is already running? [1]`,
    `<ol><li><b>become: yes</b> – privilege escalation: the tasks are run as the superuser (root, via sudo) on the managed nodes.</li><li>There is <b>one play</b>, named <b>web</b>, executed on the host group <b>webservers</b> (it contains three tasks). <i>(In the 2023 version a second play, <b>db</b>, ran on <b>dbservers</b>.)</i></li><li>The task reports <b>ok</b> – nothing was changed because the package is already the latest version – shown in <b>green</b>. (A task that changes something shows <b>changed</b> in yellow/orange; a failure is red.)</li><li>The <code>command</code> module has <code>creates: /var/run/nginx.pid</code>: if that PID file already exists the command is <b>skipped</b>, because the file shows nginx is already running (idempotence).</li></ol>`);
  add(P25, "Q3(c)–(d)", 4, "Jenkins master and agents",
    `(c) Describe three responsibilities of the Master node in a Jenkins environment. [2]<br>(d) Describe the differences between dedicated and cloud-based build agents. [2]`,
    `<h5>(c) Master (controller) responsibilities</h5><ol><li><b>Job scheduling</b> – decides when build/deployment jobs run (manual, cron or commit triggers).</li><li><b>Web interface and management</b> – where users configure jobs, plugins, credentials, security and view build history.</li><li><b>Coordinating and distributing</b> work to the available build agents (using labels) and collecting their results.</li></ol><h5>(d) Dedicated vs cloud agents</h5><ul><li><b>Dedicated agents</b> are separate always-on machines (physical, VM or cloud instances) permanently assigned to Jenkins; fixed capacity, you maintain them, and they can be tuned for specific builds – but idle capacity costs money and peaks can queue.</li><li><b>Cloud-based agents</b> are provisioned <b>dynamically on demand</b> in the cloud when work arrives and <b>terminated when the job is done</b> – elastic, pay only for use, clean environment per build – but there is some start-up delay and a dependency on the cloud provider.</li></ul>`);
  add(P25, "Q3(e)", 6, "Jenkinsfile",
    `Write a Jenkinsfile defining a pipeline job: I. Checkout code (<code>git clone http://github.com/userxyz/project.git</code>) II. Build (<code>cd project; make build</code>) III. Test (<code>sh ./run_tests.sh</code>) IV. Deploy (<code>sh ./deploy.sh</code>) V. Post-build: on success echo “Pipeline completed successfully!”; on failure echo “Pipeline failed!”; cleanup workspace always (<code>sh ./cleanup.sh</code>).`,
    `<pre><code>pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps { sh 'git clone http://github.com/userxyz/project.git' }
    }
    stage('Build') {
      steps { sh 'cd project; make build' }
    }
    stage('Test') {
      steps { sh './run_tests.sh' }
    }
    stage('Deploy') {
      steps { sh './deploy.sh' }
    }
  }
  post {
    success { echo 'Pipeline completed successfully!' }
    failure { echo 'Pipeline failed!' }
    always  { sh './cleanup.sh' }
  }
}</code></pre><p>Marking points: <code>pipeline</code>/<code>agent</code>; four named <code>stage</code>s with <code>steps</code>; correct commands; <code>post</code> with <code>success</code>, <code>failure</code> and <code>always</code>.</p>`);
  add(P25, "Q4(a)", 4, "Git commands",
    `Describe for which purpose you would use: I. <code>git clone</code> II. <code>git diff</code> III. <code>git log --oneline</code> IV. <code>git restore function1.py</code>`,
    `<ol><li><b>git clone URL</b> – copies an existing remote repository, with its full history, to your machine (and sets <code>origin</code>).</li><li><b>git diff</b> – shows the changes in modified files that are <b>not yet staged</b> (<code>--staged</code> shows staged changes).</li><li><b>git log --oneline</b> – lists the commit history in compact form: one line per commit (short hash + message), newest first.</li><li><b>git restore function1.py</b> – discards the uncommitted changes in the working tree, restoring the file to its last staged/committed version.</li></ol>`);
  add(P25, "Q4(b)", 3, "Git file states diagram",
    `Draw a diagram showing the states that a file in the working tree of a Git project can be in, and the actions that would cause a file to go from one state to another.`,
    `<pre>
   Untracked ---------------- git add ----------------+
                                                      v
   Unmodified/Committed --- edit file ---> Modified --git add--> Staged
        ^                                      |                    |
        |                                      +--git restore file--+ (back to Unmodified)
        +------------------ git commit -----------------------------+
   Staged --git restore --staged file--> Modified
   Unmodified --git rm file--> removed (staged for deletion) --git commit--> gone
</pre><ul><li><b>Untracked</b> – new file Git does not know yet.</li><li><b>Unmodified (committed)</b> – identical to the last commit.</li><li><b>Modified</b> – changed since the last commit but not staged.</li><li><b>Staged</b> – changes marked in the index for the next commit.</li></ul>`);
  add(P25, "Q4(c)", 3, "Rebase vs merge",
    `With the aid of a suitable example, explain how <code>git rebase</code> results in a cleaner development history compared to <code>git merge</code>.`,
    `<p>Example: <code>main</code> has commits C1–C2–C3 while a <code>feature</code> branch split off at C2 and has commit C4.</p><ul><li><b>Merge</b> (<code>git checkout main; git merge feature</code>) combines C3 and C4 in a new <b>merge commit C5 with two parents</b>. The history keeps the fork and join – with many branches it becomes tangled.</li><li><b>Rebase</b> (<code>git checkout feature; git rebase main</code>) takes the change introduced by C4 and <b>replays it on top of C3</b> as C4′. Then <code>git checkout main; git merge feature</code> is a simple <b>fast-forward</b>: C1–C2–C3–C4′ – a <b>single straight line</b> with no merge commit.</li><li>The final code is identical; rebase just gives a <b>linear, easier-to-read history</b>. Caution: rebase rewrites history, so never rebase commits that have already been pushed and shared.</li></ul>`);
  add(P25, "Q4(d)", 4, "Selenium components",
    `Indicate which Selenium component(s) you would use: I. Run a test in parallel on multiple machines with all possible combinations of Chrome, Mozilla browsers and Linux, Windows, MacOS. [2] II. Develop a Selenium script in JavaScript for interactively filling an HTML form, without knowing how to code in JavaScript. [2]`,
    `<ol><li><b>Selenium Grid</b> (hub/router, distributor and nodes) – routes the WebDriver commands to remote machines so the same test runs in parallel on many browser/OS combinations (with WebDriver scripts, started through <code>webdriver.Remote</code>).</li><li><b>Selenium IDE</b> – the browser extension that <b>records</b> your interactions with the form as Selenium commands, replays them and can <b>export the script as JavaScript</b>, so no programming knowledge is needed.</li></ol>`);
  add(P25, "Q4(e)", 6, "Selenium Python script",
    `Write a Selenium Python script using the Chrome webdriver: I. open <code>https://example.com/login.html</code> II. enter <code>user123</code> into the text box with ID <code>username</code> III. enter <code>abc@123</code> into the password box with name <code>passwd</code> IV. click the Submit button which has the HTML tag <code>button</code> V. wait 2 seconds for the next page to load and verify that the page title is <code>Dashboard</code>.`,
    `<pre><code>from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait

driver = webdriver.Chrome()
driver.get("https://example.com/login.html")

driver.find_element(By.ID, "username").send_keys("user123")
driver.find_element(By.NAME, "passwd").send_keys("abc@123")
driver.find_element(By.TAG_NAME, "button").click()

WebDriverWait(driver, 2).until(lambda d: d.title == "Dashboard")   # explicit wait (2 s)
assert driver.title == "Dashboard"
driver.quit()</code></pre><p>Acceptable alternative for the wait: <code>driver.implicitly_wait(2)</code> or <code>time.sleep(2)</code> (explicit wait is the best answer). Marking points: webdriver.Chrome, get(url), correct locators (ID, NAME, TAG_NAME), send_keys, click, wait, title assertion.</p>`);
  add(P25, "Q5(a)", 4, "DevOps lifecycle phases and tools",
    `Briefly describe the Code, Build, Test and Deploy phases of the DevOps lifecycle, specifying two tools commonly used in each phase.`,
    `<ul><li><b>Code</b> – developers write and review code and store it in version control (branching, pull requests). Output: source code in the repository. Tools: <b>Git/GitHub, GitLab</b> (also Bitbucket).</li><li><b>Build</b> – the code is compiled, dependencies resolved and packaged into an artifact or container image on each commit (continuous integration). Output: build artifact / image in a repository. Tools: <b>Maven, Gradle, Docker, Jenkins</b>.</li><li><b>Test</b> – automated unit, integration, UI, security and performance tests; failures stop the pipeline. Output: test reports. Tools: <b>Selenium, JUnit</b>.</li><li><b>Deploy</b> – the tested build is released to staging/production (continuous delivery/deployment), often to a subset of users first. Output: running release. Tools: <b>Docker, Kubernetes, Ansible, Jenkins</b>.</li></ul>`);
  add(P25, "Q5(b)", 4, "Serverless characteristics",
    `Explain four key characteristics of Serverless computing, highlighting how it differs from other cloud computing offerings (XaaS).`,
    `<ol><li><b>No server management</b> – the provider provisions, patches, secures and maintains the servers; you supply only code.</li><li><b>Event-driven</b> – functions run only when triggered by an event (HTTP request, file upload, database change, timer).</li><li><b>Automatic scaling</b> – capacity scales up and down (even to zero) with demand without planning.</li><li><b>Pay-as-you-go</b> – billed only for actual execution time/requests, nothing when idle.</li></ol><p><b>Difference from XaaS:</b> in IaaS you rent and manage VMs (OS, runtime, scaling); in PaaS you manage the application on a provider platform; in CaaS you supply and run containers; in SaaS you simply use a finished application. In FaaS/serverless you manage <b>only the functions</b> and are billed per execution, not for reserved capacity.</p>`);
  add(P25, "Q5(c)", 3, "Lambda: function, event, trigger",
    `Explain what is meant by the following in the context of AWS Lambda services, giving an example of each: I. Function II. Event III. Trigger.`,
    `<ul><li><b>Function</b> – the code you deploy to Lambda that is invoked to process events. <i>Example:</i> a Python <code>lambda_handler(event, context)</code> that calculates the area of a rectangle.</li><li><b>Event</b> – the JSON-formatted data passed to the function as its input (converted to a dictionary/object). <i>Example:</i> <code>{"length": 15, "width": 12}</code>.</li><li><b>Trigger</b> – a resource or configuration that <b>invokes</b> the function when something happens. <i>Example:</i> uploading an image to an S3 bucket, an HTTP request through API Gateway or a function URL, a message in a queue, an IoT device sending data.</li></ul>`);
  add(P25, "Q5(d)", 4, "Lambda function in Python",
    `Write an AWS Lambda function in Python that accepts a JSON input with keys <code>length</code>, <code>width</code> and <code>height</code> of a box and returns a JSON response containing the volume of the box.`,
    `<pre><code>import json

def lambda_handler(event, context):
    length = event["length"]
    width = event["width"]
    height = event["height"]
    volume = length * width * height
    return json.dumps({"volume": volume})</code></pre><p>If the function is called through an HTTP URL or API Gateway, the JSON is a string in <code>event["body"]</code>: use <code>body = json.loads(event["body"])</code> and return <code>{"statusCode": 200, "body": json.dumps({"volume": volume})}</code>.</p>`);
  add(P25, "Q5(e)", 5, "Prometheus and Grafana",
    `Describe how Prometheus and Grafana software can be used in DevOps monitoring, clearly specifying the function performed by each of them.`,
    `<ul><li><b>Prometheus – collection, storage and alerting.</b> It periodically <b>scrapes (pulls) metrics</b> over HTTP from applications, containers, servers and Kubernetes (through exporters/endpoints), stores them as <b>time-series data</b>, lets you query and aggregate them with <b>PromQL</b>, and uses <b>Alertmanager</b> to raise alerts (email, Slack) when rules are breached (e.g. high CPU, service down).</li><li><b>Grafana – visualisation and dashboards.</b> It connects to data sources such as Prometheus and shows the metrics as live graphs, gauges and <b>dashboards</b> (and can alert), so Dev and Ops teams can see performance, availability and trends.</li><li><b>Together in DevOps:</b> they support the <i>Operate/Monitor</i> and <i>Continuous Feedback</i> phases – Prometheus gathers and stores the numbers, Grafana makes them visible – helping detect incidents early, find causes and plan improvements for the next release.</li></ul>`);

  /* =================== 2024 =================== */
  add(P24, "Q1.1–1.2", 5, "Containers vs VMs; container states",
    `1. Briefly explain why running an application in a container is more efficient compared to running it in a virtual machine. [2]<br>2. Briefly describe the five states of a Docker container in its lifecycle. [3]`,
    `<h5>1. Efficiency</h5><p>A container <b>shares the host OS kernel</b> and packages only the app and its dependencies, whereas every VM needs a full guest OS on top of a hypervisor. So containers are <b>much smaller</b> (MBs), <b>start in seconds</b>, use less CPU/RAM and disk, and allow far more instances per host.</p><h5>2. Five states</h5><ol><li><b>Created</b> – container exists (<code>docker create</code>) but has not been started.</li><li><b>Running (Up)</b> – the main process is executing (<code>docker start/run</code>).</li><li><b>Paused</b> – processes are frozen (<code>docker pause</code>) and resumed with <code>unpause</code>.</li><li><b>Exited (stopped)</b> – the process finished, was stopped (<code>docker stop</code>/<code>kill</code>) or crashed; it can be restarted.</li><li><b>Removed (deleted)</b> – <code>docker rm</code> deletes the container (and its writable-layer data) from the host. <i>(Docker also shows a transient Restarting state.)</i></li></ol>`);
  add(P24, "Q1.3", 10, "Docker commands explained",
    `For each command, explain what is specified by the command and options (if any):<br>a. <code>docker pull nginx:1.27</code> [1] b. <code>docker inspect nginx:1.27</code> [1]<br>c. a <code>docker run</code> command with <code>-v /home/luser/nginx.conf:/etc/nginx/nginx.conf</code> and <code>-v varwww:/var/www/html</code> and the image <code>nginx:1.27</code> [3] <i>(the first part of the command is not legible in the scan)</i><br>d. <code>docker inspect mynginx</code> [1] e. <code>docker top mynginx</code> [1] f. <code>docker stop mynginx</code> [1] g. <code>docker rm mynginx</code> [1] h. <code>docker image rm nginx:1.27</code> [1]`,
    `<ol type="a"><li><b>docker pull nginx:1.27</b> – downloads the image <code>nginx</code> with tag <code>1.27</code> from the registry (Docker Hub by default) into the local image store.</li><li><b>docker inspect nginx:1.27</b> – shows detailed low-level information (JSON) about the image: layers, size, entrypoint, command, environment variables.</li><li><b>docker run … -v /home/luser/nginx.conf:/etc/nginx/nginx.conf -v varwww:/var/www/html nginx:1.27</b> – creates and starts a container from <code>nginx:1.27</code>. The first <code>-v</code> is a <b>bind mount</b>: the host file <code>/home/luser/nginx.conf</code> is mounted over the container’s <code>/etc/nginx/nginx.conf</code> (supplies a custom configuration). The second <code>-v</code> mounts the <b>named Docker volume</b> <code>varwww</code> (created if missing) at <code>/var/www/html</code>, so the web content persists after the container is removed. Other options such as <code>-d</code>, <code>--name mynginx</code> and <code>-p</code> run it detached, name it and publish ports.</li><li><b>docker inspect mynginx</b> – detailed JSON about the container: state, IP address, mounts, ports, configuration.</li><li><b>docker top mynginx</b> – lists the processes running inside the container.</li><li><b>docker stop mynginx</b> – gracefully stops the running container (SIGTERM, then SIGKILL after a timeout); status becomes Exited.</li><li><b>docker rm mynginx</b> – deletes the (stopped) container from the host.</li><li><b>docker image rm nginx:1.27</b> – deletes the local image <code>nginx:1.27</code> (fails if a container still uses it).</li></ol>`);
  add(P24, "Q1.4", 5, "Reading a Compose file",
    `The Compose file (Appendix A) defines services <code>mariadb</code> (image mariadb:11, environment variables, secrets db_password and db_root_password) and <code>moodle</code> (<code>build:</code> with <code>context: .</code> and <code>dockerfile: moodle-build</code>; <code>ports: "80:8080"</code> and <code>"443:8443"</code>; <code>volumes:</code> <code>/opt/moodle/moodle_code:/var/www/moodle</code> and <code>moodledata:/var/www/moodledata</code>; <code>depends_on: mariadb</code>). <i>(Port numbers read from a poor scan.)</i><br>a. How many containers are specified? [1] b. What is specified by the segment beginning with <code>build:</code>? [1] c. What is specified by the segment starting with <code>ports:</code>? [1] d. What is the difference between the two volumes? [2]`,
    `<ol type="a"><li><b>Two containers</b> – the services <code>mariadb</code> and <code>moodle</code>.</li><li><b>build:</b> tells Compose to <b>build the image locally</b> instead of pulling one: <code>context: .</code> is the build directory (the same directory as the compose file) and <code>dockerfile: moodle-build</code> is the name of the Dockerfile to use there.</li><li><b>ports:</b> publishes container ports on the host: host port <b>80 → container port 8080</b> and host port <b>443 → container port 8443</b> (format <code>"host:container"</code>).</li><li><b>Volumes:</b> <code>/opt/moodle/moodle_code:/var/www/moodle</code> is a <b>bind mount</b> – a specific host directory (path chosen and managed by the user, editable by host processes). <code>moodledata:/var/www/moodledata</code> is a <b>named volume</b> – created and managed by Docker (under <code>/var/lib/docker/volumes</code>) and normally declared in the top-level <code>volumes:</code>; better for persistent app data.</li></ol>`);
  add(P24, "Q2.1–2.2", 6, "Kubernetes components and kubectl mechanism",
    `1. Explain the function of the following components in a Kubernetes cluster: a. Master node b. Worker node c. Scheduler d. kubelet [4]<br>2. Explain the mechanism by which a kubectl command issued by a user would cause changes in the individual nodes of the cluster. [2]`,
    `<h5>1. Components</h5><ul><li><b>Master node (control plane):</b> manages the cluster – runs the API server, scheduler, controller manager and etcd; keeps the desired state, schedules, scales and rolls out updates.</li><li><b>Worker node:</b> runs the application pods; contains kubelet, kube-proxy and a container runtime.</li><li><b>Scheduler:</b> picks the node on which each new pod will run, based on resource requirements and available capacity.</li><li><b>kubelet:</b> agent on every worker node that receives the pod specs from the master, starts/monitors the containers and reports status.</li></ul><h5>2. Mechanism</h5><p><code>kubectl</code> turns the command into a REST request to the <b>API server</b> → the API server authenticates/validates it and stores the new desired state in <b>etcd</b> → the <b>scheduler</b> assigns any unscheduled pods to nodes → the <b>kubelet</b> on each affected node (watching the API server) sees its new assignment and tells the container runtime to create, change or delete containers; controllers keep comparing actual and desired state and correct differences.</p>`);
  add(P24, "Q2.3", 6, "Deployment YAML – count, upgrade, rollout",
    `The YAML defines a Deployment <code>nginx-dpl</code> with 3 replicas and image <code>nginx:1.25</code>.<br>a. How many Kubernetes workloads are created when applied with <code>kubectl apply</code>? [2]<br>b. How would you change the configuration to upgrade nginx to 1.27? [1]<br>c. What commands would you use to roll out the change in (b) and roll back to the original configuration? [3]`,
    `<ol type="a"><li><b>5 objects:</b> 1 <b>Deployment</b>, 1 <b>ReplicaSet</b> and <b>3 Pods</b>.</li><li>Edit the container image line to <code>image: nginx:1.27</code> (or run <code>kubectl set image deployment/nginx-dpl nginx=nginx:1.27</code>).</li><li><b>Roll out:</b> <code>kubectl apply -f nginx-deployment2.yaml</code> then watch with <code>kubectl rollout status deployment/nginx-dpl</code> – a rolling update with zero downtime (a new ReplicaSet scales up, the old one scales down).<br><b>Roll back:</b> <code>kubectl rollout undo deployment/nginx-dpl</code> (optionally <code>kubectl rollout history deployment/nginx-dpl</code> / <code>--to-revision=1</code>).</li></ol>`);
  add(P24, "Q2.4–2.5", 8, "Deployment vs StatefulSet; Services",
    `4. Explain the difference between a Deployment and a StatefulSet. How would you change the YAML in part 3 to use a StatefulSet instead of a Deployment? [4]<br>5. What is the purpose of a Service in Kubernetes? State two types of services and explain the difference between them. [4]`,
    `<h5>4. Deployment vs StatefulSet</h5><ul><li><b>Deployment</b> – for <b>stateless</b> apps: pods are identical and interchangeable, get random names, share storage, are created/updated/deleted in any order; replacements get new names.</li><li><b>StatefulSet</b> – for <b>stateful</b> apps (databases): each pod has a <b>stable, ordinal name</b> (<code>nginx-sts-0…</code>), its <b>own PVC/PV</b> (<code>volumeClaimTemplates</code>), ordered creation and rolling update, and is reached through a <b>headless Service</b>.</li><li><b>YAML change:</b> <code>kind: Deployment</code> → <code>kind: StatefulSet</code>; add <code>serviceName: nginx-hl</code> (the headless service) under <code>spec</code>; optionally add <code>volumeClaimTemplates</code>. The <code>replicas</code>, <code>selector</code> and <code>template</code> stay the same.</li></ul><h5>5. Service</h5><p>A <b>Service</b> gives a set of pods (chosen by a label selector) a <b>stable virtual IP/DNS name and load-balances</b> requests between them, hiding that pods come and go.</p><ul><li><b>ClusterIP</b> (default): reachable <b>only inside the cluster</b>; used for internal communication.</li><li><b>NodePort</b>: additionally opens a port (30000–32767) on <b>every node</b>, so the service is reachable from outside at <code>&lt;NodeIP&gt;:&lt;NodePort&gt;</code> (testing/development). (<b>LoadBalancer</b> goes further and provisions a cloud load balancer.)</li></ul>`);
  add(P24, "Q3.1", 3, "Ansible nodes and SSH",
    `1. Ansible automates configuration of systems.<br>a. What are the requirements that the Managed nodes have to satisfy? [1]<br>b. Describe the mechanism used by the Control node to connect to the Managed nodes. [1]<br>c. What needs to be done to prepare the Managed nodes so the Control node can connect without providing any credentials? [1]`,
    `<ol type="a"><li>Managed nodes need <b>Python</b> installed, the <b>SSH daemon running</b> and reachable, and a <b>user account</b> (e.g. <code>ansible</code>) that can become root with <code>sudo</code>.</li><li>The control node connects over <b>SSH</b> (agentless): it copies a small Python module to the node, runs it with the node’s Python and removes it, with no agent installed.</li><li>Use <b>key-based SSH</b>: generate a key pair on the control node (<code>ssh-keygen -t rsa</code>) and copy the <b>public key</b> to every managed node (<code>ssh-copy-id ansible@host</code>, which places it in <code>~/.ssh/authorized_keys</code>); keep the private key on the control node.</li></ol>`);
  add(P24, "Q3.2–3.3", 7, "Playbook elements and a playbook",
    `2. Using a suitable playbook as an example, explain the following elements in an Ansible playbook: a. Play b. Task c. Module [3]<br>3. Write an Ansible playbook to ensure that a group of hosts called <code>dbservers</code> have the latest version of mariadb installed, and the service mariadb is started. It is required to become the superuser. [4]`,
    `<h5>2. Elements (example)</h5><pre><code>- name: db                    # a PLAY
  hosts: dbservers
  become: yes
  tasks:
  - name: latest mariadb      # a TASK
    apt:                      # the MODULE
      name: mariadb-server
      state: latest</code></pre><ul><li><b>Play</b> – maps a group of hosts (<code>dbservers</code>) to a list of tasks; a playbook can contain many plays.</li><li><b>Task</b> – one action in a play (<code>latest mariadb</code>); tasks run in order on each host.</li><li><b>Module</b> – the reusable unit of work a task calls (<code>apt</code>, <code>service</code>, <code>template</code>, <code>command</code>…) with its arguments.</li></ul><h5>3. Playbook</h5><pre><code>- name: db servers
  hosts: dbservers
  become: yes
  tasks:
  - name: latest mariadb is installed
    apt:
      name: mariadb-server
      state: latest
  - name: mariadb service is started
    service:
      name: mariadb
      state: started</code></pre>`);
  add(P24, "Q3.4–3.5", 4, "Jenkins agents and labels",
    `4. What is the difference between an Inbound agent and an ssh agent in Jenkins? [2]<br>5. Describe the purpose for which Agent labels are used in Jenkins. [2]`,
    `<h5>4. Inbound vs SSH agent</h5><ul><li><b>Inbound agent:</b> the <b>agent initiates</b> the connection to the controller (launched with a command such as <code>jenkins/inbound-agent -url … -secret …</code>); the controller listens on TCP port 50000 and the agent authenticates with a shared secret. Works well when the agent is behind a firewall/NAT.</li><li><b>SSH agent:</b> the <b>controller connects to the agent</b> over SSH using a private key stored as a Jenkins credential (the public key is on the agent, which runs sshd).</li></ul><h5>5. Agent labels</h5><p>Labels are tags (e.g. <code>linux</code>, <code>windows</code>, <code>gpu</code>, <code>dev</code>) that group agents by capability, hardware or environment. A job or stage names a label (<code>agent { label 'linux &amp;&amp; gpu' }</code>) so Jenkins <b>runs it only on a suitable agent</b> – choosing the right platform/hardware and keeping environments separate. Labels can be combined with <code>&amp;&amp;</code>, <code>||</code> and <code>!</code>.</p>`);
  add(P24, "Q3.6", 6, "Jenkinsfile structure",
    `With the aid of a suitable example which includes the keywords agent, stages, stage, steps, retry and timeout, describe the structure of a Jenkinsfile.`,
    `<pre><code>pipeline {                        // declarative pipeline
  agent any                       // where to run (any agent, a label or a container)
  stages {                        // all stages
    stage('Build') {              // one logical phase
      steps {                     // the actions of the stage
        sh 'make build'
      }
    }
    stage('Test') {
      steps { sh './run_tests.sh' }
    }
    stage('Deploy') {
      steps {
        retry(3) {                // re-run a flaky step up to 3 times
          sh './deploy.sh'
        }
        timeout(time: 3, unit: 'MINUTES') {   // fail if it takes longer than 3 min
          sh './health-check.sh'
        }
      }
    }
  }
  post {
    failure { echo 'Build failed.' }
  }
}</code></pre><ul><li><b>pipeline</b> – the root block of a declarative Jenkinsfile.</li><li><b>agent</b> – selects the node/label/container that executes the pipeline.</li><li><b>stages → stage</b> – stages are the major phases (Build, Test, Deploy) and run in sequence.</li><li><b>steps</b> – the individual commands inside a stage.</li><li><b>retry</b> and <b>timeout</b> – resilience wrappers: retry on failure, abort if too slow.</li><li><b>post</b> (optional) – actions after the run (always/success/failure).</li></ul>`);
  add(P24, "Q4.1–4.3", 10, "Git commands",
    `1. Explain for which purpose you would use: a. pull b. push c. init d. add e. status [5]<br>2. Explain the difference between git fetch and git pull. [2]<br>3. Which Git commands would you use to: a. view the commit history b. view changes in staged files only c. create a branch called testing and switch to it (one command)? [3]`,
    `<h5>1. Purposes</h5><ul><li><b>git pull</b> – fetch the latest commits from the remote and merge them into the current branch.</li><li><b>git push</b> – upload your local commits (<code>git push origin main</code>) to the remote repository.</li><li><b>git init</b> – turn the current directory into a new Git repository (creates <code>.git</code>).</li><li><b>git add</b> – stage new/modified files so they are included in the next commit.</li><li><b>git status</b> – show which files are untracked, modified or staged and the current branch.</li></ul><h5>2. fetch vs pull</h5><p><code>git fetch</code> only <b>downloads</b> new objects and updates the remote-tracking branches (<code>origin/main</code>); your working tree and current branch are <b>unchanged</b> – you can inspect first. <code>git pull</code> = <code>git fetch</code> <b>followed by a merge</b> (or rebase) into your current branch, so it changes your working tree and may cause conflicts.</p><h5>3. Commands</h5><ol type="a"><li><code>git log</code> (or <code>git log --oneline</code>)</li><li><code>git diff --staged</code> (same as <code>--cached</code>)</li><li><code>git checkout -b testing</code> (or <code>git switch -c testing</code>)</li></ol>`);
  add(P24, "Q4.4–4.5", 5, "Selenium components and waits",
    `4. Describe the three main components of Selenium, and for which purpose each component is used. [3]<br>5. Explain the need of waiting strategies in Selenium scripts, and list two waiting strategies that can be used. [2]`,
    `<h5>4. Components</h5><ul><li><b>Selenium WebDriver</b> – language bindings and browser drivers that control a real browser like a user (find elements, type, click); used to write automated test scripts.</li><li><b>Selenium IDE</b> – browser extension that records user actions as Selenium commands, replays them and exports code; used to learn Selenium and to create tests quickly without coding.</li><li><b>Selenium Grid</b> – hub and nodes that run WebDriver tests in parallel on multiple machines, browsers and operating systems.</li></ul><h5>5. Waiting strategies</h5><p><b>Need:</b> pages load and change dynamically; if the script acts before an element exists or is visible it fails, and fixed <code>sleep</code> calls are unreliable or waste time.</p><ol><li><b>Implicit wait</b> – <code>driver.implicitly_wait(2)</code>: a global timeout during which each element lookup keeps polling until the element appears.</li><li><b>Explicit wait</b> – <code>WebDriverWait(driver, 2).until(condition)</code>: wait for a specific condition (element displayed, title changes) up to a timeout.</li></ol>`);
  add(P24, "Q4.6", 5, "Selenium login script",
    `Write a Selenium script in Python to: a. open the page at <code>https://www.example.com/login.php</code> b. input <code>admin</code> in the textbox named <code>username</code> c. input <code>top-secret</code> in the textbox with ID <code>passwd</code> d. click on the Submit button, which is the only <code>button</code> element on the page e. assert that the login is successful by verifying that the element with ID <code>message</code> has the text <code>Login successful</code>.`,
    `<pre><code>from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()
driver.implicitly_wait(2)
driver.get("https://www.example.com/login.php")

driver.find_element(By.NAME, "username").send_keys("admin")
driver.find_element(By.ID, "passwd").send_keys("top-secret")
driver.find_element(By.TAG_NAME, "button").click()

message = driver.find_element(By.ID, "message")
assert message.text == "Login successful"
driver.quit()</code></pre>`);
  add(P24, "Q5.1–5.2", 8, "DevOps advantages and lifecycle",
    `1. Briefly explain four advantages of using the DevOps approach in software development. [4]<br>2. Describe the activities carried out and the outputs of any four phases in the DevOps cycle. [4]`,
    `<h5>1. Advantages</h5><ol><li><b>Faster delivery</b> – automation and CI/CD allow frequent releases and quick bug fixes.</li><li><b>Better quality</b> – continuous testing and feedback catch defects early.</li><li><b>Collaboration and trust</b> – shared responsibility removes the silos between Dev and Ops.</li><li><b>Efficiency and cost savings</b> – repetitive tasks are automated, so fewer people and less rework are needed (also higher productivity and more reliable releases).</li></ol><h5>2. Four phases</h5><ul><li><b>Plan</b> – scope features from stakeholder and user feedback. <i>Output:</i> prioritised backlog/requirements.</li><li><b>Develop/Code</b> – write, review and test features (TDD, pair programming). <i>Output:</i> source code in version control.</li><li><b>Build/Integrate (CI)</b> – merge, compile, unit-test and package. <i>Output:</i> build artifact in a binary repository.</li><li><b>Deploy</b> – release the build to test then production environments, often gradually. <i>Output:</i> running release.</li><li><b>Operate/Monitor</b> – keep the service healthy, watch performance and incidents. <i>Output:</i> metrics, alerts and incident reports.</li><li><b>Learn (continuous feedback)</b> – gather user feedback. <i>Output:</i> input for the next plan.</li></ul>`);
  add(P24, "Q5.3–5.4", 6, "Serverless; Lambda runtime and trigger",
    `3. Describe four characteristics of serverless computing. [4]<br>4. Explain the following terms in relation to AWS Lambda functions: a. Runtime b. Trigger. [2]`,
    `<h5>3. Characteristics</h5><ol><li><b>No server management</b> – the provider handles provisioning, patching and scaling.</li><li><b>Event-driven</b> – code runs only in response to events.</li><li><b>Automatic scaling</b> with demand.</li><li><b>Pay-per-use</b> – billed for execution time only, nothing when idle (plus fast development and low operational overhead).</li></ol><h5>4. Terms</h5><ul><li><b>Runtime</b> – the language-specific environment (e.g. <code>python3.13</code>, <code>nodejs22.x</code>) inside Lambda’s execution environment that runs the function; it must match the function’s language.</li><li><b>Trigger</b> – a resource or configuration (S3 upload, API Gateway/HTTP request, queue message, schedule) that invokes the function.</li></ul>`);
  add(P24, "Q5.5", 6, "Lambda volume function",
    `Write an AWS Lambda function in Python which will accept an event with input parameters <code>length</code>, <code>width</code> and <code>height</code>, provided in JSON format, and produce the volume as the output, also provided in JSON format.`,
    `<pre><code>import json

def lambda_handler(event, context):
    # the runtime converts the JSON event into a Python dictionary
    length = event["length"]
    width = event["width"]
    height = event["height"]
    volume = length * width * height
    return json.dumps({"volume": volume})</code></pre><p>Test event: <code>{"length": 2, "width": 3, "height": 4}</code> → <code>{"volume": 24}</code>.</p>`);

  /* =================== 2023 =================== */
  add(P23, "Q1.1–1.4", 8, "DevOps commitment, hypervisor vs engine, Docker objects, layers",
    `1. What is the main commitment required at the organizational level for DevOps? [2]<br>2. Give two reasons why the roles of the hypervisor and the container engine can be considered similar. [2]<br>3. Explain how these pairs of Docker object types are related: a. Images and containers b. Containers and volumes [2]<br>4. Briefly explain what a Layer in a Docker image is and how layers correspond to Dockerfile instructions. [2]`,
    `<ol><li><b>Organisational commitment:</b> continuous <b>communication, collaboration and shared responsibility</b> among all software delivery stakeholders – Dev, Ops and also security, compliance, risk and business teams – breaking down silos.</li><li><b>Similar roles:</b> both are a software layer between the hardware/OS and the workloads that <b>(a) allow several isolated workloads to share one host</b> and <b>(b) create, start, stop and manage the lifecycle of those workloads</b> (VMs / containers) and allocate resources to them. (They differ: a hypervisor virtualises hardware and each VM runs its own OS; the container engine shares the host kernel.)</li><li><b>a.</b> An <b>image</b> is a read-only template; a <b>container</b> is a running instance created from an image – many containers can be created from one image. <b>b.</b> A <b>volume</b> is Docker-managed storage that can be <b>mounted into</b> a container to keep data that survives the container’s removal; one volume can be shared by several containers.</li><li>A <b>layer</b> is a read-only set of filesystem changes. <b>Each Dockerfile instruction</b> (FROM, RUN, COPY…) produces one layer, stacked to form the image; layers are cached and shared, and when the Dockerfile changes only the changed layer and those after it are rebuilt.</li></ol>`);
  add(P23, "Q1.5", 6, "Single Docker commands",
    `Specify a single Docker command (complete, with options) for each task: a. Download the Apache image <code>httpd</code> with tag <code>2.4.58</code> from Docker Hub. [1] b. Determine the size, entrypoint, command, environment variables and number of layers of the downloaded image. [1] c. Run it detached as a container named <code>myapache1</code>, with container ports 80 and 443 mapped to host ports 8080 and 8443, a Docker volume <code>html</code> mounted at <code>/var/www/html</code>, and the host directory <code>/var/images</code> mounted at a given mount point. [3] d. A final task on the container <code>myapache1</code> (not legible in the scan). [1]`,
    `<ol type="a"><li><code>docker pull httpd:2.4.58</code></li><li><code>docker image inspect httpd:2.4.58</code> (shows size, Entrypoint, Cmd, Env and the list of layers)</li><li><pre><code>docker run -d --name myapache1 \\
  -p 8080:80 -p 8443:443 \\
  -v html:/var/www/html \\
  -v /var/images:/&lt;given mount point&gt; \\
  httpd:2.4.58</code></pre>(<code>-d</code> detached, <code>--name</code>, <code>-p host:container</code> twice, a named volume <code>html</code> and a bind mount of <code>/var/images</code>.)</li><li>Likely tasks and their answers: view processes – <code>docker top myapache1</code>; view logs – <code>docker logs myapache1</code>; stop – <code>docker stop myapache1</code>; delete – <code>docker rm myapache1</code>.</li></ol>`);
  add(P23, "Q1.6", 6, "Compose: build, secrets, volume",
    `The Compose file (Appendix A) has a <code>moodle</code> service with <code>build: context: .</code> and <code>dockerfile: moodle-build</code>, a clear-text <code>MOODLE_PASSWORD</code> and a <code>mariadb</code> service.<br>a. Explain what is specified by the three lines starting with <code>build</code>. What is the location of the file <code>moodle-build</code> relative to the compose file? [2]<br>b. Show how to modify the file to use a secrets file for <code>MOODLE_PASSWORD</code>. [2]<br>c. Show how to mount a Docker volume called <code>mariadb_data</code> at <code>/var/mariadb</code> in the mariadb container. [2]`,
    `<h5>a.</h5><p><code>build:</code> tells Compose to <b>build the image from a Dockerfile</b> instead of pulling it. <code>context: .</code> – the build context directory is the <b>current directory (the directory of the compose file)</b>; <code>dockerfile: moodle-build</code> – the Dockerfile to use is the file named <code>moodle-build</code>. So the file <code>moodle-build</code> is in the <b>same directory as the compose file</b>.</p><h5>b. Secret for MOODLE_PASSWORD</h5><pre><code>services:
  moodle:
    environment:
      - MOODLE_PASSWORD_FILE=/run/secrets/moodle_password   # replaces MOODLE_PASSWORD=...
    secrets:
      - db_password
      - moodle_password
secrets:
  db_password:
    file: db_password.txt
  moodle_password:
    file: moodle_password.txt</code></pre><h5>c. Volume in the mariadb service</h5><pre><code>services:
  mariadb:
    image: mariadb:11
    volumes:
      - mariadb_data:/var/mariadb
volumes:
  mariadb_data:</code></pre>`);
  add(P23, "Q2.1–2.2", 4, "API server, kubelet, kubectl mechanism",
    `1. Explain the function of the API server and the kubelet in a Kubernetes cluster and where each component runs. [2]<br>2. Explain the mechanism by which a kubectl command would effect changes in the individual nodes. [2]`,
    `<ul><li><b>API server</b> – the front end of the control plane; exposes the Kubernetes REST API, authenticates and validates requests and stores the cluster state in etcd. Used by kubectl and by all other components. <b>Runs on the master (control-plane) node.</b></li><li><b>kubelet</b> – the agent that receives the pod specifications from the API server, makes the container runtime start/stop containers, monitors them and reports status. <b>Runs on every worker node.</b></li><li><b>Mechanism:</b> kubectl → REST call to the API server → desired state saved in etcd → scheduler picks a node for new pods → the kubelet on that node (watching the API server) instructs the container runtime to apply the change; controllers keep reconciling actual with desired state.</li></ul>`);
  add(P23, "Q2.3", 10, "Deployment → StatefulSet reasoning",
    `A Deployment <code>apache-dpl</code> (replicas 3, selector app: apache, image <code>httpd:2.4.57</code>, port 80) is applied.<br>a. What workloads are created? [2] b. Which will have predictable names? [1]<br>c. The configuration is changed to 4 replicas and image <code>httpd:2.4.58</code>. Which workloads are modified, which deleted, and how many new workloads are created? [3]<br>d. Show how to change the configuration to a StatefulSet (only the modifications). [1] e. What workloads are created by the modified configuration? [2] f. Which of those have predictable names? [1]`,
    `<ol type="a"><li><b>1 Deployment, 1 ReplicaSet and 3 Pods.</b></li><li>Only the <b>Deployment</b> (<code>apache-dpl</code>, the name you gave it). The ReplicaSet (<code>apache-dpl-&lt;hash&gt;</code>) and pods (<code>…-&lt;hash&gt;-&lt;random&gt;</code>) get generated random suffixes.</li><li><b>Modified:</b> the Deployment (new generation; the old ReplicaSet is also modified – scaled down to 0 replicas and kept for rollback). <b>Deleted:</b> the <b>3 old pods</b> (terminated gradually during the rolling update). <b>New:</b> <b>1 new ReplicaSet and 4 new pods</b> (running httpd:2.4.58).</li><li><pre><code>kind: StatefulSet            # was: Deployment
spec:
  serviceName: apache-hl     # added (headless service name)
  replicas: 3
  ...                        # selector and template unchanged</code></pre></li><li><b>1 StatefulSet and 3 Pods</b> (no ReplicaSet is created).</li><li>Both the <b>StatefulSet</b> (<code>apache-dpl</code>) and its <b>pods</b>, named <code>apache-dpl-0</code>, <code>apache-dpl-1</code>, <code>apache-dpl-2</code> – ordinal, stable names that are kept when a pod is recreated.</li></ol>`);
  add(P23, "Q2.4", 6, "Ingress with two services",
    `An Ingress must expose TCP port 8080 of the Service <code>appA-svc</code> at <code>http://example.com/appA</code>. The Service YAML (name, selector app: nginx, port 8080, targetPort 80) and Ingress YAML (rules, path /appA, backend service name and port number) have blanks.<br>a. Complete the configuration by providing the missing parts. [2]<br>b. Expose another Service at <code>http://example.com/appB</code>: target port 80 of pods labelled <code>app: apache</code> via port 5080 of the service. Write the YAML for the new service and modify the Ingress. [4]`,
    `<h5>a. Missing parts</h5><ul><li>Service <code>metadata.name:</code> <b>appA-svc</b> (Kubernetes names must be lower-case: <code>appa-svc</code>).</li><li>Ingress backend <code>service.name:</code> <b>appA-svc</b>, <code>port.number:</code> <b>8080</b> (the Service port, not the target port).</li></ul><h5>b. New Service and updated Ingress</h5><pre><code>apiVersion: v1
kind: Service
metadata:
  name: appb-svc
spec:
  selector:
    app: apache
  ports:
  - protocol: TCP
    port: 5080
    targetPort: 80
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: my-ingress
spec:
  rules:
  - host: example.com
    http:
      paths:
      - pathType: Prefix
        path: /appA
        backend:
          service:
            name: appa-svc
            port:
              number: 8080
      - pathType: Prefix          # added
        path: /appB
        backend:
          service:
            name: appb-svc
            port:
              number: 5080</code></pre>`);
  add(P23, "Q3.1–3.2", 10, "Ansible nodes and playbook",
    `1. a. What are the two types of nodes in an Ansible environment? [1] b. Why is Ansible agentless? [1]<br>2. The playbook (Appendix B) has a play <code>web</code> on <code>webservers</code> (gather_facts: true, become: yes; apt nginx latest, template index.html, command <code>service nginx start</code> with <code>creates: /var/run/nginx.pid</code>) and an incomplete play <code>db</code> on <code>dbservers</code>.<br>a. What do the lines <code>become: yes</code> specify? [1] b. Are the lines <code>gather_facts: true</code> essential? [1] c. Identify the plays and their host groups. [2] d. What is the output for the <code>apt</code> task if the package is already installed, and what colour? [1] e. How does Ansible know if the nginx service is already running? [1] f. Complete the missing parts so database hosts have the latest mariadb installed and the service started. [2]`,
    `<h5>1.</h5><ol type="a"><li><b>Control node</b> (where Ansible is installed) and <b>managed nodes</b> (hosts).</li><li>No agent software is installed on managed nodes – the control node connects over SSH and runs modules with the node’s Python.</li></ol><h5>2.</h5><ol type="a"><li>Escalate privileges: run the tasks as root (via sudo).</li><li><b>No</b> – it only gathers facts (OS, IP…) usable in variables/conditions; the playbook works without it (set <code>gather_facts: false</code> to speed it up).</li><li>Two plays: <b>web</b> → host group <b>webservers</b>; <b>db</b> → host group <b>dbservers</b>.</li><li><b>ok</b> (no change), shown in <b>green</b>.</li><li>The command task has <code>creates: /var/run/nginx.pid</code>: if the PID file exists the command is skipped, meaning nginx is already running.</li><li><pre><code>- name: db
  hosts: dbservers
  gather_facts: true
  become: yes
  tasks:
  - name: latest mariadb present
    apt:
      name: mariadb-server
      state: latest
  - name: mariadb service started
    service:
      name: mariadb
      state: started</code></pre></li></ol>`);
  add(P23, "Q3.3–3.5", 7, "CI/CD tool, Jenkinsfile, best practices",
    `3. The company plans a long-term hybrid multi-cloud migration and needs automation covering the whole application lifecycle, vendor-agnostic and deployable in any cloud with minimal adaptation. a. Which CI/CD tool should you use? [2] b. Will it support a hybrid cloud environment? Explain briefly. [2]<br>4. Briefly explain what a Jenkinsfile is. List 3 advantages of using it and briefly explain them. [3]<br>5. List 4 best practices when using Jenkins. (the 3 marks in the paper) `,
    `<h5>3.</h5><ol type="a"><li><b>Jenkins</b> – open-source, vendor-neutral automation server with pipelines as code and plugins for every major tool.</li><li><b>Yes.</b> Jenkins runs on-premises or in any cloud. Build agents can be placed on-premises (dedicated or SSH/inbound agents) and in AWS/Azure/GCP (cloud agents are provisioned on demand through plugins or Kubernetes/Docker agents). The same <b>Jenkinsfile</b> works everywhere, selecting agents with <b>labels</b>, so moving workloads between environments needs minimal change.</li></ol><h5>4. Jenkinsfile</h5><p>A <b>Jenkinsfile</b> is a text file (Groovy-based DSL) that defines the CI/CD pipeline as code – agent, stages, steps and post actions – kept in the project’s source repository. Advantages: <b>(1) version control</b> – pipeline changes are tracked, reviewed and rolled back like code; <b>(2) reproducible and portable</b> – identical pipeline on any Jenkins server/branch, no manual GUI configuration; <b>(3) durable and powerful</b> – supports parallel stages, retry/timeout, error handling, notifications and can be resumed after a restart.</p><h5>5. Best practices</h5><ol><li>Use <b>pipeline as code</b> (Jenkinsfile in version control).</li><li><b>Do not build on the controller</b> – use dedicated/cloud agents and labels.</li><li>Keep Jenkins and plugins <b>updated</b>; secure it (role-based access, credentials store, no hard-coded secrets).</li><li><b>Back up</b> the Jenkins home; use timeouts/retries; keep jobs small and clean workspaces/artifacts.</li></ol>`);
  add(P23, "Q4", 20, "Migrating workloads to AWS",
    `Evaluate each workload and list the AWS services you would use, with brief reasons. Prioritise services that reduce management overhead. [4 marks each]<br>1. A single-container application that only needs to run/process data when there is a request; multiple API endpoints.<br>2. A Python application (not a container) that needs high computational power and must always be running.<br>3. A static website with some NodeJS functions executed at the click of a button.<br>4. A locally hosted Git repository and a Jenkins server with the entire CI/CD pipeline; reduce management overhead.<br>5. An application with fewer than 10 containers, some exposing APIs; staff should not go through the Kubernetes learning curve now.`,
    `<ol><li><b>Amazon API Gateway + AWS Lambda (container image)</b> – Lambda runs the container only when invoked and bills per request; API Gateway exposes the multiple API endpoints and routes to the function. Fully serverless, no servers to manage. (Alternative: AWS App Runner.)</li><li><b>Amazon EC2 compute-optimised instances (C family) with Auto Scaling</b> for the always-on, CPU-heavy Python app; to reduce overhead use <b>AWS Elastic Beanstalk</b> (Python platform) which provisions EC2, load balancing and scaling and deploys the code for you.</li><li><b>Amazon S3 + CloudFront</b> to host the static site cheaply with a CDN and HTTPS; <b>AWS Lambda (Node.js)</b> behind <b>API Gateway</b> (or a Lambda function URL) for the button-click functions. <b>AWS Amplify</b> can combine hosting and functions with the least effort.</li><li><b>AWS CodeCommit</b> (or GitHub) for the repository and <b>AWS CodeBuild + CodePipeline + CodeDeploy</b> for the pipeline – fully managed CI/CD, no Jenkins server to patch or scale. (If Jenkins must stay, run it on ECS/Fargate.)</li><li><b>Amazon ECS with AWS Fargate</b> (images in <b>Amazon ECR</b>) behind an <b>Application Load Balancer</b> – runs containers without managing servers and without Kubernetes; the ALB exposes the APIs.</li></ol>`);
  add(P23, "Q5.1", 12, "Git commands in practice",
    `Specify the Git commands (with the steps) to: a. Initialise a Git repo and configure author information locally to the repository. [2] b. Save changes to the file “final report.txt” to the repo with the message “This is my commit &lt;Your IT Number&gt;”. [2] c. Undo the last change but be able to track it in the git history (last commit ID 80LCW094NBUE40). [2] d. While on the “dev” branch, create a new branch “feature_8990” that has the content of dev. [2] e. Commits are Commit5-J4M5P, Commit4-KLDO9, Commit3-EKM34, Commit2-SH3JK3, Commit1-mEKWI. Remove the last 2 commits from the history but keep the changes of each in the working directory. [4]`,
    `<ol type="a"><li><pre><code>git init
git config user.name "Your Name"          # no --global: stored in .git/config
git config user.email "you@example.com"</code></pre></li><li><pre><code>git add "final report.txt"
git commit -m "This is my commit IT21XXXXXX"</code></pre></li><li><b>git revert</b> creates a new commit that reverses the old one, so history is kept: <pre><code>git revert 80LCW094NBUE40</code></pre></li><li><pre><code>git checkout -b feature_8990     # on dev; or: git switch -c feature_8990 / git branch feature_8990 dev</code></pre></li><li>Move the branch back two commits but leave the files as they are:<pre><code>git reset --mixed HEAD~2          # same as: git reset HEAD~2
# or: git reset --mixed Commit3-EKM34
git status                         # changes of Commit4 and Commit5 are in the working directory (unstaged)</code></pre>(<code>--soft</code> would keep them staged; <code>--hard</code> would discard them.)</li></ol>`);
  add(P23, "Q5.2–5.3", 8, "Feature branch into Production; why fork",
    `2. You developed a new OTP feature on branch <code>feature_otp_service</code> and need to add it to the release branch <code>Production</code>. What is the industry-accepted best-practice method? Briefly explain why, giving advantages. [4]<br>3. Explain why you may need to fork a Git repository. Provide 3 use cases. [4]`,
    `<h5>2. Best practice – pull request (merge request)</h5><p>Push the feature branch and open a <b>pull request</b> from <code>feature_otp_service</code> into <code>Production</code>; teammates review it, automated CI tests run, and it is then merged (optionally after rebasing the branch so history stays linear). <b>Why/advantages:</b> peer <b>code review</b> and shared knowledge; automated tests/quality gates before release; the protected production branch never receives unreviewed code; discussion and an audit trail; easy to revert if needed; fewer conflicts and a cleaner history.</p><h5>3. Forking</h5><p>A <b>fork</b> is your own writable server-side copy of a repository. Use cases: <b>(1)</b> contribute to a project where you have no write permission – fork, push your topic branch, send a pull request; <b>(2)</b> take an open-source project in your own direction or maintain a customised version without affecting the original; <b>(3)</b> experiment or learn safely, or keep your own backup/copy of someone’s code base (also useful as a template to start a new project).</p>`);

  DATA.mod("IT5080").written = w;
})();
