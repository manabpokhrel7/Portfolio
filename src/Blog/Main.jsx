import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Container } from '@mui/material';

// Local images
import cloudfrontImage from '../Images/cloudfront.png';
import selinux from './SELinux.png';
import terraformImage from '../Images/project1.png';
import ansibleImage from '../Images/ansible.png';

// Remote image URLs
const flaskEcsImage =
  'https://external-preview.redd.it/getting-started-with-ecs-can-be-overwhelming-it-involves-v0-8RKLRhNqqFoIfOCAZeMIMFqJdHasrsCzjHCkyFQ_Ug4.jpg?auto=webp&s=5ebc93a1bb196ae308164ef0ae3250de26a12fe5';
const aksBlogImage = 'https://platformwale.blog/wp-content/uploads/2023/07/aks_terraform.png';
const azureVmImage =
  'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*ENYc2iY5W5WXCb1--j1X4A.png';
const aksAutoImage =
  'https://miro.medium.com/v2/resize:fit:1140/format:webp/1*AMrbzm5T3L51o0jrXAXbOA.jpeg';

const BlogMainPage = () => {
  const blogPosts = [
    // New Medium post (added at top)
    {
      title:
        'Automating Kubernetes Cluster Setup on Azure with Terraform, Ansible, and kubeadm',
      description:
        'Turn Azure VMs provisioned by Terraform into a working Kubernetes cluster with Ansible and kubeadm: install prerequisites, initialize the control plane, generate a join token, and auto-join the worker node. 6 min read · 4 days ago.',
      image: aksAutoImage,
      link: 'https://medium.com/@manabpokhrel7/automating-kubernetes-cluster-setup-on-azure-with-terraform-ansible-and-kubeadm-ea869813d00a',
    },
    {
      title:
        'Provisioning Azure Virtual Machines with Managed Identity Using Terraform',
      description:
        'Learn how to securely provision Azure Virtual Machines using Terraform with Managed Identity, enhancing automation and access control.',
      image: azureVmImage,
      link: 'https://medium.com/@manabpokhrel7/provisioning-azure-virtual-machines-with-managed-identity-using-terraform-a0134e522e90',
    },
    {
      title: 'Azure Kubernetes Cluster with Terraform and Managed Identity',
      description:
        'Provisioning AKS using Terraform and configuring secure access via Managed Identity and RBAC.',
      image: aksBlogImage,
      link: 'https://medium.com/@manabpokhrel7/provisioning-azure-kubernetes-service-aks-with-terraform-and-managing-identity-based-access-c03ee8143339',
    },
    {
      title: 'Understanding CloudFront',
      description:
        'A comprehensive guide to using Cloudfront effectively in your system.',
      image: cloudfrontImage,
      link: 'https://medium.com/@manabpokhrel7/aws-cloudfront-19b20bc8f239',
    },
    {
      title: 'Understanding SELinux and Apache',
      description:
        'A practical walkthrough of working with SELinux in Apache configurations.',
      image: selinux,
      link: 'https://medium.com/@manabpokhrel7/understanding-selinux-and-apache-a-practical-guide-3bea5b8b450b',
    },
    {
      title: 'Configuring vsftpd for Anonymous FTP Uploads',
      description:
        'How to enable anonymous FTP uploads securely with SELinux settings.',
      image: selinux,
      link: 'https://medium.com/@manabpokhrel7/configuring-vsftpd-for-anonymous-ftp-uploads-with-selinux-booleans-0d8b4ef2ee3d',
    },
    {
      title: 'Creating an Ubuntu VM on Google Cloud with Terraform',
      description:
        'Step-by-step guide to launch an Ubuntu VM on Google Cloud using Terraform from Rocky Linux.',
      image: terraformImage,
      link: 'https://medium.com/@manabpokhrel7/creating-an-ubuntu-vm-on-google-cloud-with-terraform-from-rocky-linux-cf1cbca106e9',
    },
    {
      title: 'Practical Ansible with Navigator',
      description:
        'Learn how to configure, run, and manage host group variables using Ansible Navigator.',
      image: ansibleImage,
      link: 'https://medium.com/@manabpokhrel7/practical-ansible-with-navigator-configuring-running-and-managing-host-group-variables-a79f647a64ac',
    },
    {
      title:
        'Deploying a Multi-Container Flask Application on AWS ECS with Terraform',
      description:
        'A detailed guide on deploying a multi-container Flask application using Terraform and AWS ECS.',
      image: flaskEcsImage,
      link: 'https://medium.com/@manabpokhrel7/deploying-a-multi-container-flask-application-on-aws-ecs-with-terraform-e1c152512f5e',
    },
  ];

  return (
    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
      <Grid container spacing={4}>
        {blogPosts.map((post, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <Card
                sx={{
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'scale(1.03)',
                    boxShadow: 6,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={post.image}
                  alt={post.title}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {post.description}
                  </Typography>
                </CardContent>
              </Card>
            </a>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BlogMainPage;
