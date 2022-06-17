## Tenderly web3 Action

 #### development

 - run `tenderly login` to login to the account and select **livepeer** as project
 - create a new directory for new a action under `automation/actions`
 - update `tenderly.yaml` to invoke that action

 #### build

 - run `tenderly actions build` to test building the action before deployment
   note: sometimes the build output is not very informative when it fails. Use this flag to get detailed log `--output json --debug`

 #### deploy

 - run `tenderly actions deploy` to upload the action to tenderly dashboard
 - on the dashboard test the action using manual trigger