# Create a folder
$ mkdir actions-runner && cd actions-runner# Download the latest runner package
$ curl -o actions-runner-linux-arm64-2.330.0.tar.gz -L https://github.com/actions/runner/releases/download/v2.330.0/actions-runner-linux-arm64-2.330.0.tar.gz# Optional: Validate the hash
$ echo "9cb43527912086c7c8fb4119cb06409fcbcbd6f93a2d8507f30b07c495620f5c  actions-runner-linux-arm64-2.330.0.tar.gz" | shasum -a 256 -c# Extract the installer
$ tar xzf ./actions-runner-linux-arm64-2.330.0.tar.gz
