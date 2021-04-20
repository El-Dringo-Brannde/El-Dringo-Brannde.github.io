resource "google_cloud_run_service" "portfolio" {
  project  = var.project_id
  name     = "me-eldringobrannde-dev"
  location = "us-central1"

  template {
    spec {
      containers {
        image = "gcr.io/${var.project_id}/me:latest"
      }
      service_account_name = google_service_account.cloud_run_service_account.email
    }
  }

  metadata {
    labels = {
      tf-automation = true
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }
  autogenerate_revision_name = true


  depends_on = [
    google_project_iam_member.portfolio_iam
  ]
}

resource "google_cloud_run_domain_mapping" "me" {
  location = "us-central1"
  name     = "me.eldringobrannde.dev"

  metadata {
    namespace = var.project_id
  }

  spec {
    route_name = google_cloud_run_service.portfolio.name
  }
}

resource "random_id" "suffix" {
  byte_length = 4
}

resource "google_service_account" "cloud_run_service_account" {
  project      = var.project_id
  account_id   = "portfolio-${random_id.suffix.hex}"
  display_name = "Portfolio account."
  description  = "Service account to use with Cloud Run personal Portfolio."
  depends_on = [
    google_project_service.required_service
  ]
}

resource "google_cloud_run_service_iam_member" "allUsers" {
  project = google_cloud_run_service.portfolio.project

  location = google_cloud_run_service.portfolio.location
  service  = google_cloud_run_service.portfolio.name
  role     = "roles/run.invoker"
  member   = "allUsers"
}
