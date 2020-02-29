# RUN

## Requirements

 * Helm
 * Kubectl
 * GCloud CLI

## Preparation

Add Cluster in Kubeconfig

Add Helm charts Repo

```
helm repo add stable https://kubernetes-charts.storage.googleapis.com
```

## APP
```
kubectl apply -f app/
```

### Monitioring

#### Prometheus

> https://github.com/helm/charts/tree/master/stable/prometheus

```
helm install -f config/prometheus.yaml prometheus stable/prometheus
```

#### Grafana

> https://github.com/helm/charts/tree/master/stable/grafana

```
helm install -f config/grafana.yaml grafana stable/grafana
```

In /config/hpa.json is a dashboard for the autoscaling. Must be added manually.

## Horizontal Scaling


### CPU Scaler
```
kubectl apply -f cpuScaler.yaml
```

```
kubectl delete -f cpuScaler.yaml
```

### Memory Scaler
```
kubectl apply -f memoryScaler.yaml
```

```
kubectl delete -f memoryScaler.yaml
```


### Combind Scaler
```
kubectl apply -f combindScaler.yaml
```

```
kubectl delete -f combindScaler.yaml
```

### Custom Scaler

#### Prometheus Adapter

> https://github.com/helm/charts/tree/master/stable/prometheus-adapter

```
helm install -f config/prometheus-adapter.yaml prometheus-adapter stable/prometheus-adapter
```

```
helm uninstall prometheus-adapter 
```
#### Apply Scaler
```
kubectl apply -f customScaler.yaml
```

```
kubectl delete -f customScaler.yaml
```

## Vertical Scaling

must be activated in the cluster

```
kubectl apply -f verticalScaler.yaml
```

```
kubectl delete -f verticalScaler.yaml
```
