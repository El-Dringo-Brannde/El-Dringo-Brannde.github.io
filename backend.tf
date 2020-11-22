terraform {
  backend "remote" {
    # The name of your Terraform Cloud organization.
    organization = "eldringobrannde"

    # The name of the Terraform Cloud workspace to store Terraform state files in.
    workspaces {
      name = "portfolio-prod"
    }
  }
  required_providers {
	  google = "~>3.48.0"
	  random = "~>3.0.0"
  }
}

provider "google" {
  project                     = var.project_id
  impersonate_service_account = var.WORKER


  region = "us-central1"
  zone   = "us-central1-a"
}