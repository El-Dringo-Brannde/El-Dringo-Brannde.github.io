resource "google_cloud_run_service" "portfolio" {
  name     = "me-eldringobrannde-dev"
  location = "us-central1"

  template {
    spec {
      containers {
        image = "gcr.io/el-dringo-brannde-io/me"
      }
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }
}

resource "google_cloud_run_service_iam_member" "allUsers" {
  location = google_cloud_run_service.portfolio.location
  project = google_cloud_run_service.portfolio.project
  service = google_cloud_run_service.portfolio.name
  role = "roles/run.invoker"
  member = "allUsers"
}