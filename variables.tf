variable "deployer" {
  type        = string
  description = "Auto populated via pipeline."
  default     = null
}

variable "cicd" {
  type    = bool
  default = false
}

variable "credentials" {
  type        = string
  description = "The credentials to authenticate with."
  default     = null
}

variable "project_id" {
  default = "el-dringo-brannde-io"
}
