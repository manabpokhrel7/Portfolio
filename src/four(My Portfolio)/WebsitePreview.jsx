// WebsitePreview.jsx — Modern polished version
import React, { useState } from "react";
import {
  Box,
  Grid,
  Card,
  Typography,
  Button,
  Chip,
  IconButton,
  Modal,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";

// Local images
import project1 from "../Images/project1.png";
import terakube from "../Images/terakube.png";
import img from "../Images/img.png";
import project2 from "../Images/project2.png";

// Remote assets
const eksProjectImage =
  "https://amlanscloud.com/static/0428f8b7413d84492d43565c788c203b/af144/main.png";
const ecsTerraformImage =
  "https://external-preview.redd.it/getting-started-with-ecs-can-be-overwhelming-it-involves-v0-8RKLRhNqqFoIfOCAZeMIMFqJdHasrsCzjHCkyFQ_Ug4.jpg?auto=webp&s=5ebc93a1bb196ae308164ef0ae3250de26a12fe5";
const kubeadmLogo = "https://kubernetes.io/images/kubeadm-stacked-color.png";
const serverlessProjectImage =
  "https://media.licdn.com/dms/image/v2/D5622AQFMOBKF80la0Q/feedshare-shrink_1280/B56ZojnPsrG0As-/0/1761534082268?e=1762992000&v=beta&t=kxD9C9jo0wZcoWCeaAxvDf0u_GoxD9o9UemQl1nLD3Y";

// All projects (full restored list)
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
      "DevOps",
    ],
  },
  {
    title: "Kubernetes Cluster Automation with Ansible & kubeadm on Azure",
    image: kubeadmLogo,
    description:
      "Automated Kubernetes cluster deployment using Ansible and kubeadm, with Terraform handling Azure infrastructure. Fully reproducible and multi-node setup.",
    link: "https://lnkd.in/g5WgmKRv",
    tags: ["Terraform", "Ansible", "Azure", "Kubernetes", "kubeadm", "IaC"],
  },
  {
    title: "Multi-Cloud GitLab Runners (AWS | Azure | GCP)",
    image:
      "https://miro.medium.com/v2/resize:fit:580/1*v8XiToFK-pdj779PC_WHuQ.png",
    description:
      "Automated deployment of self-hosted GitLab runners across AWS, Azure, and GCP using Terraform and Ansible.",
    link: "https://gitlab.com/manabpokhrel7/gcp-selfhosted-runner-terraform",
    tags: ["Terraform", "Ansible", "GitLab", "MultiCloud", "CI/CD"],
  },
  {
    title: "AKS with Terraform: Managed Identity + RBAC",
    image:
      "https://platformwale.blog/wp-content/uploads/2023/07/aks_terraform.png",
    description:
      "Provisioned Azure Kubernetes Service (AKS) via Terraform with Managed Identity and RBAC.",
    link: "https://gitlab.com/manabpokhrel7/azureaks-terraform",
    tags: ["Terraform", "Azure", "AKS", "RBAC", "Kubernetes"],
  },
  {
    title: "Terraform + Ansible EC2 Self-Hosted GitLab Runner",
    image: project1,
    description:
      "Self-hosted GitLab runner on AWS EC2 built using Terraform and Ansible, including automatic registration.",
    link: "https://gitlab.com/manabpokhrel7/terraform-ansible-ec2-selfhostedrunner",
    tags: ["Terraform", "Ansible", "AWS", "EC2", "GitLab"],
  },
  {
    title: "Flask + Redis + DB on EKS via GitLab Pipeline",
    image: terakube,
    description:
      "Production-grade deployment of multi-container Flask app using Kubernetes on AWS EKS orchestrated with GitLab CI/CD.",
    link: "https://gitlab.com/manabpokhrel7/flask-redis-db-aks-pipeline",
    tags: ["Flask", "Redis", "Terraform", "EKS", "CI/CD"],
  },
  {
    title: "Helm Deployment: WordPress + MySQL + Monitoring",
    image: img,
    description:
      "Deploys WordPress and MySQL on Kubernetes using Helm. Includes Prometheus and Grafana monitoring.",
    link: "https://gitlab.com/manabpokhrel7/helm-wp-mysql",
    tags: ["Helm", "Prometheus", "Grafana", "WordPress"],
  },
  {
    title: "Helm + ArgoCD: Python, Redis, DB Deployment",
    image: project2,
    description:
      "Deploys Python app with Redis and DB using Helm and ArgoCD following GitOps workflow.",
    link: "https://gitlab.com/manabpokhrel7/myapp-helm",
    tags: ["Helm", "ArgoCD", "GitOps", "Python"],
  },
  {
    title: "Terraform + Ansible: EKS + Runner + ArgoCD CI/CD",
    image: eksProjectImage,
    description:
      "End-to-end EKS cluster deployment with Terraform and Ansible. Integrated GitLab Runner and ArgoCD for automated pipelines.",
    link: "https://gitlab.com/manabpokhrel7/eks-with-testing",
    tags: ["Terraform", "Ansible", "EKS", "ArgoCD", "CI/CD"],
  },
  {
    title: "AWS ECS with Terraform: Flask + Redis + PostgreSQL",
    image: ecsTerraformImage,
    description:
      "Deployed Flask app with Redis and PostgreSQL on ECS using Terraform. Includes ALB, Cloud Map, and CloudWatch logging.",
    link: "https://gitlab.com/manabpokhrel7/aws-ecs-with-terraform",
    tags: ["Terraform", "AWS", "ECS", "Flask", "Redis"],
  },
];

// Styled glass card
const GlassCard = styled(motion(Card))(({ theme }) => ({
  backdropFilter: "blur(8px)",
  background:
    theme.palette.mode === "dark"
      ? "linear-gradient(135deg, rgba(30,41,59,0.65), rgba(15,23,42,0.7))"
      : "linear-gradient(135deg, rgba(255,255,255,0.7), rgba(245,245,245,0.9))",
  borderRadius: 18,
  boxShadow: "0 6px 25px rgba(0,0,0,0.08)",
  overflow: "hidden",
  cursor: "pointer",
  transition: "transform 0.35s ease, box-shadow 0.35s ease",
  "&:hover": {
    transform: "translateY(-6px) scale(1.03)",
    boxShadow: "0 12px 35px rgba(0,0,0,0.15)",
  },
}));

export default function WebsitePreview() {
  const theme = useTheme();
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

  return (
    <>
      {/* Project grid */}
      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{
          px: { xs: 2, sm: 4, md: 6 },
          maxWidth: 1400,
          mx: "auto",
        }}
      >
        {projects.map((project, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <GlassCard
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleOpen(project)}
            >
              <Box
                sx={{
                  height: 200,
                  overflow: "hidden",
                }}
              >
                <Box
                  component="img"
                  src={project.image}
                  alt={project.title}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.4s ease",
                    "&:hover": { transform: "scale(1.1)" },
                  }}
                />
              </Box>
              <Box sx={{ p: 2 }}>
                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  gutterBottom
                  sx={{ lineHeight: 1.4 }}
                >
                  {project.title}
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <Chip
                      key={idx}
                      label={tag}
                      size="small"
                      sx={{
                        fontSize: "0.7rem",
                        background:
                          theme.palette.mode === "dark"
                            ? "rgba(255,255,255,0.08)"
                            : "rgba(0,0,0,0.05)",
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </GlassCard>
          </Grid>
        ))}
      </Grid>

      {/* Modal */}
      <AnimatePresence>
        {open && activeProject && (
          <Modal
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropProps={{
              sx: {
                backgroundColor: "rgba(0,0,0,0.6)",
                backdropFilter: "blur(8px)",
                cursor: "pointer",
              },
            }}
          >
            <Box
              onClick={handleClose}
              sx={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: 2,
                overflowY: "auto",
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
                style={{ width: "100%", maxWidth: 420 }}
              >
                <Box
                  sx={{
                    bgcolor: "background.paper",
                    borderRadius: 3,
                    boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
                    p: 2.5,
                    position: "relative",
                    outline: "none",
                  }}
                >
                  <IconButton
                    onClick={handleClose}
                    sx={{
                      position: "absolute",
                      top: 6,
                      right: 6,
                      color: "text.secondary",
                    }}
                  >
                    <CloseIcon />
                  </IconButton>

                  <Typography
                    variant="subtitle1"
                    fontWeight={600}
                    mb={1.5}
                    textAlign="center"
                  >
                    {activeProject.title}
                  </Typography>

                  <Box
                    component="img"
                    src={activeProject.image}
                    alt={activeProject.title}
                    sx={{
                      width: "100%",
                      maxHeight: 220,
                      objectFit: "contain",
                      borderRadius: 2,
                      mb: 1.5,
                      boxShadow: "0 3px 12px rgba(0,0,0,0.15)",
                    }}
                  />

                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 0.5,
                      justifyContent: "center",
                      mb: 1.5,
                    }}
                  >
                    {activeProject.tags.map((tag, idx) => (
                      <Chip
                        key={idx}
                        label={tag}
                        color="secondary"
                        size="small"
                        variant="outlined"
                      />
                    ))}
                  </Box>

                  <Typography
                    variant="body2"
                    sx={{
                      mb: 2,
                      lineHeight: 1.5,
                      textAlign: "justify",
                    }}
                  >
                    {activeProject.description}
                  </Typography>

                  <Button
                    variant="contained"
                    color="secondary"
                    href={activeProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    fullWidth
                    sx={{ textTransform: "none" }}
                  >
                    View Full Project
                  </Button>
                </Box>
              </motion.div>
            </Box>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
}
