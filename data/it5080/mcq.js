/* IT5080 DevOps – multiple-choice practice questions (self-test; the module exam itself is written) */
(function () {
  var bank = [];
  function q(lec, text, opts, ans, why) { bank.push({ id: "d" + (bank.length + 1), lec: lec, q: text, o: opts, a: ans, e: why }); }

  /* ---------- Lecture 1: Introduction ---------- */
  q(1, "What does the DevOps approach primarily try to remove between development and operations?", ["The need for testing", "Silos (the “wall of confusion”)", "Version control", "Cloud services"], 1, "DevOps breaks the silos between Dev and Ops through collaboration and automation.");
  q(1, "What is the main commitment DevOps needs at the ORGANISATIONAL level?", ["Buying automation tools", "Continuous communication, collaboration and shared responsibility", "Moving to the cloud", "Hiring more testers"], 1, "The organisational level is about culture and shared responsibility; automation is the technical-level commitment.");
  q(1, "Which phases make up the Dev half of the 6-phase DevOps lifecycle?", ["Plan, Build, Continuous Integration", "Release, Deploy, Operate", "Code, Test, Monitor", "Deploy, Operate, Continuous Feedback"], 0, "Dev: Plan, Build, CI. Ops: Deploy, Operate, Continuous Feedback.");
  q(1, "In the 8-phase lifecycle, which of these is an Ops phase?", ["Plan", "Code", "Test", "Monitor"], 3, "Ops phases: Release, Deploy, Operate, Monitor.");
  q(1, "What is the usual OUTPUT of the continuous-integration (build) phase?", ["A deployed production system", "A build artifact stored in a binary repository", "A requirements document", "User feedback"], 1, "CI packages the code into an executable artifact that goes to a binary repository.");
  q(1, "Which statement about continuous testing is true?", ["Testing is a single phase before release", "Testing happens in all phases of the lifecycle", "Testing is only done by QA after deployment", "Testing is not needed with CI/CD"], 1, "Continuous testing: unit tests in development, smoke tests at deployment, A/B tests in learning, and so on.");
  q(1, "DevSecOps means…", ["Security is added as a final phase", "Security is integrated and automated throughout the DevOps lifecycle", "Only the security team deploys code", "Using a security-only toolchain"], 1, "Security becomes a shared responsibility from the start.");
  q(1, "Which cloud model delivers only your code as functions, billed per execution?", ["IaaS", "PaaS", "SaaS", "FaaS (serverless)"], 3, "FaaS = Function as a Service.");
  q(1, "Which pair is the usual monitoring combination covered in IT5080?", ["Jenkins and Selenium", "Prometheus and Grafana", "Ansible and Git", "Docker and Helm"], 1, "Prometheus collects/stores metrics; Grafana visualises them.");

  /* ---------- Lecture 2: Containers and Docker ---------- */
  q(2, "Which statement about a container versus a VM is correct?", ["A container includes its own guest OS kernel", "A container shares the host OS kernel and starts faster", "A container needs a hypervisor", "A container gives the highest isolation"], 1, "Containers share the host kernel, so they are lighter and start quicker than VMs.");
  q(2, "What is a Docker image?", ["A running container", "A read-only template with instructions for creating a container", "A virtual disk", "A Docker network"], 1, "A container is a runnable instance of an image.");
  q(2, "In a Dockerfile, each instruction creates…", ["A container", "A layer in the image", "A volume", "A registry entry"], 1, "Layers are cached, so only changed layers are rebuilt.");
  q(2, "Which command runs a container in the background and maps host port 8081 to container port 80?", ["docker run -p 8081:80 nginx", "docker run -d -p 8081:80 nginx", "docker run -d -p 80:8081 nginx", "docker start -p 8081:80 nginx"], 1, "-d = detached; -p host:container.");
  q(2, "Which component of Docker accepts commands from the CLI and manages containers?", ["Docker registry", "Docker daemon (dockerd)", "Docker Compose file", "Docker Hub"], 1, "The CLI is the client; the daemon does the work.");
  q(2, "Data in a container is lost when the container is removed unless it is stored in…", ["The container writable layer", "A volume or bind mount", "A tmpfs mount", "An image layer"], 1, "Volumes and bind mounts persist on the host; tmpfs is memory only.");
  q(2, "Which mount type is created and managed by Docker under /var/lib/docker/volumes?", ["Bind mount", "tmpfs mount", "Volume", "Overlay"], 2, "That is the definition of a Docker volume.");
  q(2, "A CMD instruction in a Dockerfile…", ["Cannot be overridden", "Sets default arguments/command that docker run can override", "Builds a layer from a registry", "Defines a volume"], 1, "ENTRYPOINT is the fixed executable; CMD is overridable.");
  q(2, "Which command shows the processes running inside a container?", ["docker logs", "docker top", "docker inspect", "docker stats --all"], 1, "docker top NAME lists processes in the container.");
  q(2, "What does docker exec -it webapp /bin/bash do?", ["Starts a new container", "Opens an interactive shell inside the running container webapp", "Copies files", "Builds an image"], 1, "-it = interactive terminal.");
  q(2, "Which docker compose command starts all services in the background?", ["docker compose build", "docker compose up -d", "docker compose create", "docker compose run"], 1, "up -d creates and starts the services detached.");
  q(2, "In a Compose file, depends_on specifies…", ["The image to use", "Start-up order between services", "The host port", "The volume driver"], 1, "Compose starts the dependency first.");
  q(2, "Why are Docker secrets preferred over environment variables for passwords?", ["They are faster", "The password is not stored in clear text in the compose file; it is read from /run/secrets", "They encrypt the image", "They avoid volumes"], 1, "Secrets are defined as files and mounted at /run/secrets.");
  q(2, "On which Docker network can containers resolve each other by NAME?", ["The default bridge network", "A user-defined bridge network", "The host network", "The none network"], 1, "Docker provides DNS name resolution on user-defined bridge networks.");
  q(2, "Which network driver connects containers running on different Docker hosts?", ["bridge", "host", "overlay", "none"], 2, "Overlay networks span multiple daemons.");
  q(2, "Which of these is NOT one of the states of a Docker container?", ["Created", "Paused", "Exited", "Compiled"], 3, "States include created, running (up), paused, exited and removed.");

  /* ---------- Lecture 3: Kubernetes ---------- */
  q(3, "Which component receives kubectl requests and exposes the Kubernetes API?", ["kubelet", "API server", "kube-proxy", "container runtime"], 1, "The API server is the front end of the control plane.");
  q(3, "Which component decides on which node a new pod will run?", ["Scheduler", "kubelet", "etcd", "kube-proxy"], 0, "The scheduler assigns pods to nodes.");
  q(3, "The kubelet is…", ["A cluster-wide database", "An agent on each worker node that runs the pods ordered by the control plane", "The command-line tool", "A load balancer"], 1, "kubelet receives and executes orders from the master node.");
  q(3, "What is the smallest deployable unit in Kubernetes?", ["Container", "Pod", "Node", "Deployment"], 1, "Kubernetes manages pods, not individual containers.");
  q(3, "Applying a Deployment with 3 replicas creates…", ["3 Deployments", "1 Deployment, 1 ReplicaSet and 3 Pods", "1 StatefulSet and 3 Pods", "3 ReplicaSets"], 1, "Deployment → ReplicaSet → Pods.");
  q(3, "Which workload has a predictable, stable pod name such as nginx-sts-0?", ["Deployment", "ReplicaSet", "StatefulSet", "Job"], 2, "StatefulSet pods get ordinal names and keep them when replaced.");
  q(3, "Why would you use a StatefulSet instead of a Deployment?", ["To get random pod names", "Each pod needs its own stable identity and storage", "To run one pod per node", "To run a job once"], 1, "StatefulSets give each pod its own PVC and a stable name.");
  q(3, "A DaemonSet is used to…", ["Run exactly one pod on every node", "Run a task once", "Expose a service", "Store configuration"], 0, "E.g. networking or logging agents on each node.");
  q(3, "Which Service type is the default and is reachable only from inside the cluster?", ["NodePort", "LoadBalancer", "ClusterIP", "ExternalName"], 2, "ClusterIP exposes the Service on a virtual internal IP.");
  q(3, "Which Service type exposes a port on every node of the cluster?", ["ClusterIP", "NodePort", "Headless", "Ingress"], 1, "NodePort opens a port on each node: <NodeIP>:<NodePort>.");
  q(3, "What is the advantage of an Ingress over several LoadBalancer Services?", ["It works only for TCP", "One Ingress can expose many Services using host/path rules", "It is faster at layer 2", "It replaces pods"], 1, "One entry point routes HTTP(S) traffic to multiple services.");
  q(3, "What is needed in the cluster for an Ingress resource to work?", ["A StatefulSet", "An ingress controller", "A DaemonSet", "A hostPath volume"], 1, "The controller implements the Ingress rules.");
  q(3, "A headless Service is defined with…", ["type: NodePort", "clusterIP: None", "type: LoadBalancer", "port: 0"], 1, "It provides stable DNS names to StatefulSet pods.");
  q(3, "Which command reverts a Deployment to its previous version?", ["kubectl delete deployment", "kubectl rollout undo deployment/name", "kubectl rollout restart", "kubectl scale --replicas=0"], 1, "kubectl rollout undo rolls back.");
  q(3, "A rolling update of a Deployment…", ["Deletes all pods first", "Replaces pods gradually with zero downtime", "Requires a StatefulSet", "Only works on one node"], 1, "A new ReplicaSet scales up while the old one scales down.");
  q(3, "What does a PersistentVolumeClaim (PVC) represent?", ["A node", "A user's request for storage of a size and access mode", "A container image", "A Service"], 1, "The control plane binds the PVC to a matching PV.");
  q(3, "Helm charts are used to…", ["Monitor clusters", "Package, install and upgrade Kubernetes applications", "Build container images", "Replace kubectl"], 1, "A chart bundles templates and default values for an application.");

  /* ---------- Lecture 4: Ansible ---------- */
  q(4, "Ansible is called agentless because…", ["It has no inventory", "Nothing needs to be installed on the managed nodes", "It does not use SSH", "It runs only on one node"], 1, "It connects over SSH and uses the node's Python.");
  q(4, "What are the two node types in an Ansible environment?", ["Master and slave", "Control node and managed nodes", "Client and server", "Controller and agent"], 1, "The control node runs Ansible; managed nodes are the hosts it configures.");
  q(4, "Which is a requirement for an Ansible managed node?", ["Docker installed", "Python installed and SSH reachable", "A Jenkins agent", "A Kubernetes kubelet"], 1, "Python, sshd and a user with sudo.");
  q(4, "Which command copies the public key to a managed node for password-less login?", ["ssh-keygen", "ssh-copy-id", "ansible-vault", "scp -r"], 1, "ssh-keygen creates the pair; ssh-copy-id installs the public key.");
  q(4, "In a playbook, “become: yes” means…", ["Create a new user", "Run tasks with elevated (sudo/root) privileges", "Install Python", "Gather facts"], 1, "Privilege escalation.");
  q(4, "What colour/result does Ansible show for an apt task when the package is already installed?", ["Yellow – changed", "Green – ok (no change)", "Red – failed", "Blue – skipped"], 1, "Idempotent tasks that need no change report ok.");
  q(4, "What does “creates: /var/run/nginx.pid” in a command task do?", ["Creates the file", "Skips the command if the file already exists", "Restarts nginx", "Deletes the file"], 1, "It makes the command idempotent: the file shows nginx is already running.");
  q(4, "A play in a playbook specifies…", ["Only a module", "The hosts to run on and the tasks to run on them", "The SSH key", "The inventory file name"], 1, "Play = hosts + tasks.");
  q(4, "Which command runs a playbook?", ["ansible nginx -m ping", "ansible-playbook nginx.yaml", "ansible-inventory nginx", "ansible-config nginx.yaml"], 1, "ansible-playbook file.yaml (add -K to ask for the sudo password).");

  /* ---------- Lecture 5: Git ---------- */
  q(5, "How does Git store data?", ["As differences (deltas) between files", "As snapshots of the project", "As one big file", "Only on a central server"], 1, "Git thinks in snapshots; unchanged files are linked to previous copies.");
  q(5, "Which command shows changes in staged files only?", ["git diff", "git diff --staged", "git status", "git log -p"], 1, "git diff alone shows unstaged changes.");
  q(5, "Which command creates a branch called testing and switches to it in one step?", ["git branch testing", "git checkout -b testing", "git merge testing", "git switch testing"], 1, "git switch -c testing is the modern equivalent.");
  q(5, "What is the difference between git fetch and git pull?", ["No difference", "fetch downloads only; pull = fetch + merge", "pull downloads only; fetch merges", "fetch pushes changes"], 1, "fetch leaves your working tree unchanged.");
  q(5, "Which command undoes a published commit by creating a new commit?", ["git reset --hard", "git revert", "git rebase", "git stash"], 1, "git revert keeps the history intact.");
  q(5, "Which command removes the last 2 commits but keeps their changes in the working directory?", ["git reset --hard HEAD~2", "git reset --mixed HEAD~2", "git revert HEAD~2", "git checkout HEAD~2"], 1, "--mixed (default) keeps the changes unstaged; --hard discards them.");
  q(5, "What is the benefit of git rebase over git merge?", ["It keeps merge commits", "It gives a cleaner, linear history", "It is safe for shared commits", "It needs no conflicts"], 1, "But it rewrites history – do not rebase shared commits.");
  q(5, "What is a Git branch?", ["A copy of the whole project", "A lightweight pointer to a commit", "A remote server", "A tag"], 1, "Creating a branch is nearly instantaneous.");
  q(5, "A file that is modified and added to the staging area is…", ["Untracked", "Staged", "Committed", "Ignored"], 1, "git add moves a modified file to the staged state.");
  q(5, "Which command lists commit history in a compact one-line format?", ["git log --oneline", "git status -s", "git show", "git history"], 0, "git log --oneline");
  q(5, "A pull request is used to…", ["Download code", "Ask maintainers to review and merge your work", "Delete a branch", "Create a tag"], 1, "Common after forking a repository.");

  /* ---------- Lecture 6: Jenkins ---------- */
  q(6, "A Jenkinsfile is…", ["A plugin", "A text file defining a pipeline as code, stored with the source", "A build log", "An agent binary"], 1, "Pipeline-as-code in Groovy DSL.");
  q(6, "Which Jenkins component schedules jobs and serves the web interface?", ["Build agent", "Controller (master)", "Executor", "Plugin"], 1, "The controller schedules and coordinates; agents execute.");
  q(6, "In an INBOUND agent setup…", ["The controller connects to the agent over SSH", "The agent connects to the controller using a shared secret", "No connection is needed", "The agent runs on the controller"], 1, "The controller listens on TCP port 50000.");
  q(6, "Agent labels are used to…", ["Rename the controller", "Decide which agent a job runs on", "Sign builds", "Create jobs"], 1, "E.g. a job needing a GPU runs on an agent labelled gpu.");
  q(6, "Which pipeline keyword re-runs a flaky step up to n times?", ["timeout", "retry", "post", "parallel"], 1, "retry(3) { … }");
  q(6, "Which is a benefit of cloud-based build agents?", ["Fixed capacity", "They are created on demand and terminated after the job", "They never need configuration", "They run on the controller"], 1, "They cope with workload peaks and optimise resource use.");
  q(6, "In a pipeline, the post section with always { … } is used to…", ["Define stages", "Run actions after the pipeline regardless of result (e.g. clean-up)", "Select the agent", "Define a trigger"], 1, "Also available: success, failure, unstable, changed.");
  q(6, "Which job type runs the same job across several configurations (e.g. OS versions)?", ["Freestyle", "Multi-configuration", "Folder", "Pipeline"], 1, "Useful for compatibility testing.");
  q(6, "How many jobs can an executor run at one time?", ["As many as needed", "One", "Two", "Unlimited"], 1, "An executor is a single execution slot.");

  /* ---------- Lecture 7: Serverless ---------- */
  q(7, "Which is a characteristic of serverless computing?", ["You manage the OS", "Event-driven execution with automatic scaling and pay-per-use", "Always-running servers", "Fixed monthly billing"], 1, "Servers exist but are managed by the provider.");
  q(7, "In AWS Lambda a TRIGGER is…", ["The code of the function", "A resource or configuration that invokes the function", "The JSON input", "The programming language"], 1, "E.g. an S3 upload, an HTTP request or a queue message.");
  q(7, "In AWS Lambda the EVENT is…", ["The server", "JSON data passed to the function", "A billing record", "A container image"], 1, "The event is converted into an object and passed to the handler.");
  q(7, "A Lambda RUNTIME is…", ["The execution time limit", "The language-specific environment (e.g. python3.13) that runs the function", "A trigger type", "A pricing plan"], 1, "The runtime must match the function's language.");
  q(7, "Lambda layers are used to…", ["Add triggers", "Share libraries and dependencies across functions", "Store billing data", "Create events"], 1, "They reduce the size of deployment packages.");
  q(7, "Which AWS pair best serves a single-container API that only runs when a request arrives?", ["EC2 and ELB", "API Gateway and Lambda", "S3 and CloudFront", "RDS and EBS"], 1, "Serverless, pay per request, no servers to manage.");
  q(7, "Which is an open-source serverless platform for Kubernetes/on-premises?", ["AWS Lambda", "OpenFaaS", "Azure Functions", "Firebase"], 1, "OpenFaaS, Fission and OpenWhisk run on-premises.");

  /* ---------- Lecture 8: Selenium ---------- */
  q(8, "Which Selenium component runs tests in parallel on many browser/OS combinations?", ["WebDriver", "IDE", "Grid", "Remote Control"], 2, "Grid uses a hub and nodes.");
  q(8, "Which Selenium component records user actions so you can build a script without coding?", ["WebDriver", "IDE", "Grid", "Router"], 1, "The IDE is a browser extension that records and exports code.");
  q(8, "Which locator is best when an element has a unique id?", ["By.ID", "By.TAG_NAME", "By.PARTIAL_LINK_TEXT", "Absolute XPath"], 0, "IDs should be unique per page.");
  q(8, "What is an IMPLICIT wait?", ["A wait for a specific condition", "A global timeout applied to every element lookup", "time.sleep()", "A wait for the page title"], 1, "driver.implicitly_wait(2)");
  q(8, "Why is time.sleep() a poor way to wait for an element?", ["It is not allowed", "The delay may be too short (fails) or too long (slow)", "It stops the driver", "It only works in Chrome"], 1, "Use implicit or explicit waits instead.");
  q(8, "Which call finds ALL matching elements?", ["find_element", "find_elements", "find_all", "locate"], 1, "find_elements returns a list.");
  q(8, "How do you type text into an input with Selenium Python?", ["element.type('text')", "element.send_keys('text')", "element.write('text')", "element.value = 'text'"], 1, "send_keys()");
  q(8, "To run a script on a Selenium Grid you create the driver with…", ["webdriver.Chrome()", "webdriver.Remote(command_executor=...)", "webdriver.Grid()", "webdriver.Hub()"], 1, "Remote connects to the hub, e.g. http://grid-hub-ip:4444");

  DATA.mod("IT5080").mcq = bank;
  DATA.mod("IT5080").modelMcq = [];
})();
