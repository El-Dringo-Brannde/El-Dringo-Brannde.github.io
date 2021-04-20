resource "google_project_service" "required_service" {
  for_each           = toset(var.required_services)
  project            = var.project_id
  service            = each.value
  disable_on_destroy = false
}

module "service_accounts" {
  source     = "terraform-google-modules/service-accounts/google"
  version    = "~> 3.0"
  project_id = var.project_id
  names      = ["deployer"]
  project_roles = [
    "${var.project_id}=>roles/run.admin",
    "${var.project_id}=>roles/storage.admin",
    "${var.project_id}=>roles/iam.serviceAccountAdmin",
    "${var.project_id}=>roles/serviceusage.serviceUsageAdmin",
    "${var.project_id}=>roles/resourcemanager.projectIamAdmin",
    "${var.project_id}=>roles/iam.serviceAccountUser",
  ]
}
