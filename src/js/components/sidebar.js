let Controller = () => {

}
Controller.$inject = [];

let Component = {
  templateUrl: `components/sidebar.html`,
  controller: Controller
};

export default angular.module('sidebar', [])
.component('sidebar', Component);