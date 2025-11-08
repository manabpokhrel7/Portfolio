// WebsitePreview.jsx
import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  Modal,
  Typography,
  Button,
  Chip,
  Fade,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";

// Local images
import project1 from "../Images/project1.png";
import terakube from "../Images/terakube.png";
import img from "../Images/img.png";
import project2 from "../Images/project2.png";

// Remote images
const eksProjectImage =
  "https://amlanscloud.com/static/0428f8b7413d84492d43565c788c203b/af144/main.png";
const ecsTerraformImage =
  "https://external-preview.redd.it/getting-started-with-ecs-can-be-overwhelming-it-involves-v0-8RKLRhNqqFoIfOCAZeMIMFqJdHasrsCzjHCkyFQ_Ug4.jpg?auto=webp&s=5ebc93a1bb196ae308164ef0ae3250de26a12fe5";
const kubeadmLogo = "https://kubernetes.io/images/kubeadm-stacked-color.png";
const serverlessProjectImage =
  "https://media.licdn.com/dms/image/D5622AQFMOBKF80la0Q/feedshare-shrink_2048_1536/0/1731534082268?e=1736985600&v=beta&t=kxD9C9jo0wZcoWCeaAxvDf0u_GoxD9o9UemQl1nLD3Y";

// ✅ All your projects (kept in full)
const projects = [
  {
    title:
      "Terraform | AWS Lambda | S3 Static Website | DynamoDB Microservice (2025)",
    image: serverlessProjectImage,
    description:
      "Built a complete serverless microservice using Terraform automating Lambda, API Gateway, DynamoDB, and S3 static hosting. Enabled secure CRUD operations and authentication through API Gateway → Lambda → DynamoDB pipeline.",
    link: "https://lnkd.in/gvgn6VjY",
    tags: [
      "Terraform",
      "AWS",
      "Lambda",
      "API Gateway",
      "DynamoDB",
      "S3",
      "Serverless",
      "IaC",
      "Authentication",
      "CRUD",
    ],
  },
  {
    title: "Kubernetes Cluster Automation with Ansible & kubeadm on Azure",
    image: kubeadmLogo,
    description:
      "Automated Kubernetes cluster deployment using Ansible and kubeadm, with Terraform handling Azure infrastructure. Provisioned control + worker nodes, configured Kubernetes components, bootstrapped with kubeadm init/join, and deployed Flannel CNI.",
    link: "https://lnkd.in/g5WgmKRv",
    tags: [
      "Terraform",
      "Ansible",
      "Azure",
      "Kubernetes",
      "kubeadm",
      "Flannel",
      "IaC",
    ],
  },
  {
    title: "Multi-Cloud GitLab Runners (AWS | Azure | GCP)",
    image:
      "https://miro.medium.com/v2/resize:fit:580/1*v8XiToFK-pdj779PC_WHuQ.png",
    description:
      "Fully automated setup to deploy and test self-hosted GitLab runners across AWS, Azure, and GCP using Terraform, Ansible, and GitLab CI/CD.",
    link: "https://gitlab.com/manabpokhrel7/gcp-selfhosted-runner-terraform",
    tags: [
      "Terraform",
      "Ansible",
      "GitLab CI",
      "MultiCloud",
      "AWS",
      "Azure",
      "GCP",
    ],
  },
  {
    title: "AKS with Terraform: Managed Identity + RBAC",
    image: "https://platformwale.blog/wp-content/uploads/2023/07/aks_terraform.png",
    description:
      "Provisioned Azure Kubernetes Service (AKS) using Terraform with System-Assigned Managed Identity and RBAC role assignments for secure, automated deployments.",
    link: "https://gitlab.com/manabpokhrel7/azureaks-terraform",
    tags: ["Terraform", "Azure", "AKS", "RBAC", "DevOps"],
  },
  {
    title: "Terraform + Ansible EC2 Self-Hosted GitLab Runner",
    image: project1,
    description:
      "A fully automated setup of a self-hosted GitLab runner on AWS EC2 using Terraform and Ansible.",
    link: "https://gitlab.com/manabpokhrel7/terraform-ansible-ec2-selfhostedrunner",
    tags: ["Terraform", "Ansible", "AWS", "GitLab", "CI/CD"],
  },
  {
    title: "Flask + Redis + DB on EKS via GitLab Pipeline",
    image: terakube,
    description:
      "Production-grade deployment of a multi-container Python Flask app using Kubernetes on AWS EKS, orchestrated with GitLab CI/CD and provisioned using Terraform.",
    link: "https://gitlab.com/manabpokhrel7/flask-redis-db-aks-pipeline",
    tags: ["Flask", "Redis", "Kubernetes", "Terraform", "CI/CD"],
  },
  {
    title: "Helm Deployment: WordPress + MySQL + Monitoring",
    image: img,
    description:
      "Deploys a WordPress app with a MySQL backend on a Kubernetes cluster using Helm. Includes Prometheus and Grafana monitoring.",
    link: "https://gitlab.com/manabpokhrel7/helm-wp-mysql",
    tags: ["Helm", "WordPress", "MySQL", "Prometheus", "Grafana"],
  },
  {
    title: "Helm + ArgoCD: Python, Redis, DB Deployment",
    image: project2,
    description:
      "Deployed a Python app with Redis and DB using Helm and GitOps via ArgoCD for continuous delivery.",
    link: "https://gitlab.com/manabpokhrel7/myapp-helm",
    tags: ["ArgoCD", "Helm", "GitOps", "Python", "Redis"],
  },
  {
    title: "Terraform + Ansible: EKS + Self-Hosted Runner + CI/CD",
    image: eksProjectImage,
    description:
      "End-to-end project deploying an EKS cluster with Terraform and Ansible, setting up a self-hosted GitLab runner, and CI/CD deployment using ArgoCD.",
    link: "https://gitlab.com/manabpokhrel7/eks-with-testing",
    tags: ["Terraform", "Ansible", "EKS", "CI/CD", "ArgoCD"],
  },
  {
    title: "AWS ECS with Terraform: Flask + Redis + PostgreSQL",
    image: ecsTerraformImage,
    description:
      "Deploy a multi-container Flask app with Redis and PostgreSQL on AWS ECS using Terraform. Includes ALB, Cloud Map, and CloudWatch logging.",
    link: "https://gitlab.com/manabpokhrel7/aws-ecs-with-terraform",
    tags: ["Flask", "Redis", "PostgreSQL", "ECS", "Terraform", "AWS"],
  },
];

// ✨ Styled Card
const ZoomCard = styled(Card)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius * 2,
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "scale(1.04)",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
  },
}));

export default function ProjectGallery() {
  const [open, setOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const handleOpen = (project) => {
    setActiveProject(project);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setActiveProject(null);
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{ mt: 2, px: { xs: 2, sm: 4 } }}
      >
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ZoomCard onClick={() => handleOpen(project)} elevation={5}>
              <CardActionArea>
                <Box
                  component="img"
                  src={project.image}
                  alt={project.title}
                  sx={{
                    width: "100%",
                    height: 180,
                    objectFit: "cover",
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                  }}
                />
                <Box sx={{ p: 2 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 600, mb: 1 }}
                  >
                    {project.title}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 0.5,
                    }}
                  >
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <Chip key={idx} label={tag} size="small" />
                    ))}
                  </Box>
                </Box>
              </CardActionArea>
            </ZoomCard>
          </Grid>
        ))}
      </Grid>

      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              width: "100%",
              maxWidth: 480,
              bgcolor: "background.paper",
              borderRadius: 3,
              boxShadow: 24,
              p: 3,
              position: "relative",
              textAlign: "center",
            }}
          >
            {activeProject && (
              <>
                <IconButton
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                  }}
                >
                  <CloseIcon />
                </IconButton>

                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, mb: 2, mt: 1 }}
                >
                  {activeProject.title}
                </Typography>

                <Box
                  component="img"
                  src={activeProject.image}
                  alt={activeProject.title}
                  sx={{
                    width: "100%",
                    height: 220,
                    objectFit: "contain",
                    borderRadius: 2,
                    mb: 2,
                  }}
                />

                <Typography variant="body1" sx={{ mb: 2 }}>
                  {activeProject.description}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 0.5,
                    justifyContent: "center",
                    mb: 2,
                  }}
                >
                  {activeProject.tags.map((tag, idx) => (
                    <Chip key={idx} label={tag} color="secondary" size="small" />
                  ))}
                </Box>

                <Button
                  variant="contained"
                  href={activeProject.link}
                  target="_blank"
                  sx={{
                    backgroundColor: "#D70040",
                    "&:hover": { backgroundColor: "#b10435" },
                    textTransform: "none",
                  }}
                >
                  View Full Project on GitLab
                </Button>
              </>
            )}
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
