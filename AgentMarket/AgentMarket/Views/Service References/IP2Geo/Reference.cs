﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace AgentMarket.IP2Geo {
    
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    [System.ServiceModel.ServiceContractAttribute(Namespace="http://ws.cdyne.com/", ConfigurationName="IP2Geo.IP2GeoSoap")]
    public interface IP2GeoSoap {
        
        [System.ServiceModel.OperationContractAttribute(Action="http://ws.cdyne.com/ResolveIP", ReplyAction="*")]
        [System.ServiceModel.XmlSerializerFormatAttribute(SupportFaults=true)]
        AgentMarket.IP2Geo.IPInformation ResolveIP(string ipAddress, string licenseKey);
        
        [System.ServiceModel.OperationContractAttribute(AsyncPattern=true, Action="http://ws.cdyne.com/ResolveIP", ReplyAction="*")]
        System.IAsyncResult BeginResolveIP(string ipAddress, string licenseKey, System.AsyncCallback callback, object asyncState);
        
        AgentMarket.IP2Geo.IPInformation EndResolveIP(System.IAsyncResult result);
    }
    
    /// <remarks/>
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.Xml", "4.7.3056.0")]
    [System.SerializableAttribute()]
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(Namespace="http://ws.cdyne.com/")]
    public partial class IPInformation : object, System.ComponentModel.INotifyPropertyChanged {
        
        private string cityField;
        
        private string stateProvinceField;
        
        private string countryField;
        
        private string organizationField;
        
        private double latitudeField;
        
        private double longitudeField;
        
        private string areaCodeField;
        
        private string timeZoneField;
        
        private bool hasDaylightSavingsField;
        
        private short certaintyField;
        
        private string regionNameField;
        
        private string countryCodeField;
        
        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute(Order=0)]
        public string City {
            get {
                return this.cityField;
            }
            set {
                this.cityField = value;
                this.RaisePropertyChanged("City");
            }
        }
        
        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute(Order=1)]
        public string StateProvince {
            get {
                return this.stateProvinceField;
            }
            set {
                this.stateProvinceField = value;
                this.RaisePropertyChanged("StateProvince");
            }
        }
        
        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute(Order=2)]
        public string Country {
            get {
                return this.countryField;
            }
            set {
                this.countryField = value;
                this.RaisePropertyChanged("Country");
            }
        }
        
        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute(Order=3)]
        public string Organization {
            get {
                return this.organizationField;
            }
            set {
                this.organizationField = value;
                this.RaisePropertyChanged("Organization");
            }
        }
        
        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute(Order=4)]
        public double Latitude {
            get {
                return this.latitudeField;
            }
            set {
                this.latitudeField = value;
                this.RaisePropertyChanged("Latitude");
            }
        }
        
        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute(Order=5)]
        public double Longitude {
            get {
                return this.longitudeField;
            }
            set {
                this.longitudeField = value;
                this.RaisePropertyChanged("Longitude");
            }
        }
        
        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute(Order=6)]
        public string AreaCode {
            get {
                return this.areaCodeField;
            }
            set {
                this.areaCodeField = value;
                this.RaisePropertyChanged("AreaCode");
            }
        }
        
        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute(Order=7)]
        public string TimeZone {
            get {
                return this.timeZoneField;
            }
            set {
                this.timeZoneField = value;
                this.RaisePropertyChanged("TimeZone");
            }
        }
        
        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute(Order=8)]
        public bool HasDaylightSavings {
            get {
                return this.hasDaylightSavingsField;
            }
            set {
                this.hasDaylightSavingsField = value;
                this.RaisePropertyChanged("HasDaylightSavings");
            }
        }
        
        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute(Order=9)]
        public short Certainty {
            get {
                return this.certaintyField;
            }
            set {
                this.certaintyField = value;
                this.RaisePropertyChanged("Certainty");
            }
        }
        
        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute(Order=10)]
        public string RegionName {
            get {
                return this.regionNameField;
            }
            set {
                this.regionNameField = value;
                this.RaisePropertyChanged("RegionName");
            }
        }
        
        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute(Order=11)]
        public string CountryCode {
            get {
                return this.countryCodeField;
            }
            set {
                this.countryCodeField = value;
                this.RaisePropertyChanged("CountryCode");
            }
        }
        
        public event System.ComponentModel.PropertyChangedEventHandler PropertyChanged;
        
        protected void RaisePropertyChanged(string propertyName) {
            System.ComponentModel.PropertyChangedEventHandler propertyChanged = this.PropertyChanged;
            if ((propertyChanged != null)) {
                propertyChanged(this, new System.ComponentModel.PropertyChangedEventArgs(propertyName));
            }
        }
    }
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    public interface IP2GeoSoapChannel : AgentMarket.IP2Geo.IP2GeoSoap, System.ServiceModel.IClientChannel {
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    public partial class ResolveIPCompletedEventArgs : System.ComponentModel.AsyncCompletedEventArgs {
        
        private object[] results;
        
        public ResolveIPCompletedEventArgs(object[] results, System.Exception exception, bool cancelled, object userState) : 
                base(exception, cancelled, userState) {
            this.results = results;
        }
        
        public AgentMarket.IP2Geo.IPInformation Result {
            get {
                base.RaiseExceptionIfNecessary();
                return ((AgentMarket.IP2Geo.IPInformation)(this.results[0]));
            }
        }
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    public partial class P2GeoSoapClient : System.ServiceModel.ClientBase<AgentMarket.IP2Geo.IP2GeoSoap>, AgentMarket.IP2Geo.IP2GeoSoap {
        
        private BeginOperationDelegate onBeginResolveIPDelegate;
        
        private EndOperationDelegate onEndResolveIPDelegate;
        
        private System.Threading.SendOrPostCallback onResolveIPCompletedDelegate;
        
        public P2GeoSoapClient() {
        }
        
        public P2GeoSoapClient(string endpointConfigurationName) : 
                base(endpointConfigurationName) {
        }
        
        public P2GeoSoapClient(string endpointConfigurationName, string remoteAddress) : 
                base(endpointConfigurationName, remoteAddress) {
        }
        
        public P2GeoSoapClient(string endpointConfigurationName, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(endpointConfigurationName, remoteAddress) {
        }
        
        public P2GeoSoapClient(System.ServiceModel.Channels.Binding binding, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(binding, remoteAddress) {
        }
        
        public event System.EventHandler<ResolveIPCompletedEventArgs> ResolveIPCompleted;
        
        public AgentMarket.IP2Geo.IPInformation ResolveIP(string ipAddress, string licenseKey) {
            return base.Channel.ResolveIP(ipAddress, licenseKey);
        }
        
        [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Advanced)]
        public System.IAsyncResult BeginResolveIP(string ipAddress, string licenseKey, System.AsyncCallback callback, object asyncState) {
            return base.Channel.BeginResolveIP(ipAddress, licenseKey, callback, asyncState);
        }
        
        [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Advanced)]
        public AgentMarket.IP2Geo.IPInformation EndResolveIP(System.IAsyncResult result) {
            return base.Channel.EndResolveIP(result);
        }
        
        private System.IAsyncResult OnBeginResolveIP(object[] inValues, System.AsyncCallback callback, object asyncState) {
            string ipAddress = ((string)(inValues[0]));
            string licenseKey = ((string)(inValues[1]));
            return this.BeginResolveIP(ipAddress, licenseKey, callback, asyncState);
        }
        
        private object[] OnEndResolveIP(System.IAsyncResult result) {
            AgentMarket.IP2Geo.IPInformation retVal = this.EndResolveIP(result);
            return new object[] {
                    retVal};
        }
        
        private void OnResolveIPCompleted(object state) {
            if ((this.ResolveIPCompleted != null)) {
                InvokeAsyncCompletedEventArgs e = ((InvokeAsyncCompletedEventArgs)(state));
                this.ResolveIPCompleted(this, new ResolveIPCompletedEventArgs(e.Results, e.Error, e.Cancelled, e.UserState));
            }
        }
        
        public void ResolveIPAsync(string ipAddress, string licenseKey) {
            this.ResolveIPAsync(ipAddress, licenseKey, null);
        }
        
        public void ResolveIPAsync(string ipAddress, string licenseKey, object userState) {
            if ((this.onBeginResolveIPDelegate == null)) {
                this.onBeginResolveIPDelegate = new BeginOperationDelegate(this.OnBeginResolveIP);
            }
            if ((this.onEndResolveIPDelegate == null)) {
                this.onEndResolveIPDelegate = new EndOperationDelegate(this.OnEndResolveIP);
            }
            if ((this.onResolveIPCompletedDelegate == null)) {
                this.onResolveIPCompletedDelegate = new System.Threading.SendOrPostCallback(this.OnResolveIPCompleted);
            }
            base.InvokeAsync(this.onBeginResolveIPDelegate, new object[] {
                        ipAddress,
                        licenseKey}, this.onEndResolveIPDelegate, this.onResolveIPCompletedDelegate, userState);
        }
    }
}