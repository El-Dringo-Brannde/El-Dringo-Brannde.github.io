resource "google_cloud_run_service" "portfolio" {
  name     = "me-eldringobrannde-dev"
  location = "us-central1"

  template {
    spec {
      containers {
        image = "gcr.io/el-dringo-brannde-io/me"
      }
      service_account_name = var.WORKER
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
}

resource "google_project_iam_member" "portfolio_iam" {
  project = var.project_id
  role    = "roles/run.admin"
  member  = "serviceAccount:${var.WORKER}"
}

resource "google_cloud_run_service_iam_member" "allUsers" {
  location = google_cloud_run_service.portfolio.location
  project  = google_cloud_run_service.portfolio.project
  service  = google_cloud_run_service.portfolio.name
  role     = "roles/run.invoker"
  member   = "allUsers"
}