variable "WORKER" {}

variable "project_id" {
  default = "el-dringo-brannde-io"
}

variable "required_services" {
    default = [
        "run.googleapis.com", 
        "cloudresourcemanager.googleapis.com",
        "domains.googleapis.com",
        "iam.googleapis.com"
    ]
}