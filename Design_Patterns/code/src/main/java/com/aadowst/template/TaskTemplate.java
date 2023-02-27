package com.aadowst.template;

public abstract class TaskTemplate {
	private AuditTrail auditTrail;

	public TaskTemplate(){  // parameter-less constructor (used in GenateReport class)
		auditTrail = new AuditTrail();
	}

	public TaskTemplate(AuditTrail auditTrail){  // constructor that takes an auditTrail parameter (useful for sharing the same auditTrail object between classes) (used in TransferMoneyTask class)
		this.auditTrail = auditTrail;
	}

	public void execute(){
		auditTrail.record();
		doExecute();
	}

	protected abstract void doExecute();
}

