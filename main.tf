resource "google_cloud_run_service" "portfolio" {
  project  = var.project_id
  name     = "me-eldringobrannde-dev"
  location = "us-central1"

  template {
    spec {
      containers {
        image = "gcr.io/el-dringo-brannde-io/me"
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

  depends_on = [
    google_project_iam_member.portfolio_iam
  ]
}

resource "random_id" "suffix" {
  byte_length = 4
}

resource "google_project_service" "required_service" {
  for_each = toset(var.required_services)
  project  = var.project_id
  service  = each.value
}

resource "google_project_iam_member" "portfolio_iam" {
  project = var.project_id
  role    = "roles/run.admin"
  member  = "serviceAccount:${var.WORKER}"
  depends_on = [
    google_project_service.required_service
  ]
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

resource "google_service_account_iam_member" "auto_gen_acct_iam" {
  project            = var.project_id
  service_account_id = google_service_account.cloud_run_service_account.name
  role               = "roles/iam.serviceAccountUser"
  member             = "serviceAccount:${var.WORKER}"
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