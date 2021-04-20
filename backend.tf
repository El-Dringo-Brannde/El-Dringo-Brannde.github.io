terraform {
  backend "remote" {
    organization = "eldringobrannde"
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
  project = var.project_id

  region = "us-central1"
  zone   = "us-central1-a"
}

module "init" {
  source     = "./terraform/init/"
  project_id = var.project_id
}

module "deploy" {
  source     = "./terraform/"
  project_id = var.project_id

  depends_on = [module.init]
}
